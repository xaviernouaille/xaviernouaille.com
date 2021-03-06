const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.6rem',
        sm2: '0.925rem',
        '6xl': '3.6rem',
      },
      fontFamily: {
        sans: ['"bennet-banner"', ...defaultTheme.fontFamily.sans],
        body: ['"Open Sans"'],
        logo: ['"Rock Salt"'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        fourth: 'var(--color-fourth)',
        't-primary': 'var(--color-t-primary)',
        't-secondary': 'var(--color-t-secondary)',
      },
      screens: {
        '3xl': '1750px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
