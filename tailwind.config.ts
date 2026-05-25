import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2DB32D', // green accent
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'serif'],
      },
      spacing: {
        // A4 aspect ratio (794×1123 ≈ 0.707) – use custom aspect ratio utility
        'a4-w': '794px',
        'a4-h': '1123px',
      },
    },
  },
  plugins: [],
};

export default config;
