module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'primary': '#FB5F49',
        'secondary': '#07133D',
        'tertiary': '#D1D8D0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
