// lib/supabase.ts
// Supabase client for client‑side usage and admin client for server‑side privileged operations.

import { createClient } from '@supabase/supabase-js';

// Public (client‑side) instance – uses anon key
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

// Admin (server‑side) instance – uses service role key (do NOT expose to client)
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
);

export default supabase;
