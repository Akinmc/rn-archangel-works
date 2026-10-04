import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rn: '#1a365d',
        secondary: '#d4af37',
        leaf: '#2e7d32',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(26, 54, 93, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
