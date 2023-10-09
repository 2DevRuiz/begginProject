/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      fontFamily: {
        'display': ['"Montserrat"'],
      },
      container:{
        center:true
      },
      extend: {
        colors: {
          'orange': '#FDB618',
          'blue-primary': '#00BBE1',
          'default-gray': '#BDBCBD',
          'light-white' : 'rgba(255,255,255,0.18)'
          // 'white':'#ffffff'
        },
        boxShadow: {
          'custom': '0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2)',
        }
      },
    },
    plugins: [],
  }