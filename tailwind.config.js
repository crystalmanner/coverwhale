module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpleMain: "#613675",
        purpleLight: "#9f72b2",
        purpleExtraLight: "#ce7bed",

        pinkMain: "#f9e4f9"
      },
      screens: {
        'xs': '425px',
        'sm': '640px',  
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '2rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
