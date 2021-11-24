const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        "2xl": "1.6rem",
        "sm2": "0.925rem"
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        logo: ['Rock Salt']
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
