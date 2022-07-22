/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': '#0a192f',
        'primary-text-color': '#64ffda'
      },
      spacing: {
        75: '18.3rem'
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
