/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontSize: {
        md: '0.9rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
