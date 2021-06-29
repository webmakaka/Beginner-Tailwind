const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal,
        'light-blue': colors.sky,
      },
    },
  },
  variants: {
    backgroundOpacity: ['responsive', 'even', 'hover', 'focus'],
    extend: {},
  },
  plugins: [],
};
