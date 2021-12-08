const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        "2xl": "1.6rem",
        "1.5xl": "1.53rem",
        "sm2": "0.925rem"
      },
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        body: ['"Montserrat"'],
        logo: ['"Rock Salt"']
      },
      colors: {
        "secondary": "var(--color-secondary)"
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
