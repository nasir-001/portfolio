/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': '#0a192f',
        'primary-text-color': '#64ffda'
      }
    },
  },
  plugins: [],
  prefix: 'tw-'
}
