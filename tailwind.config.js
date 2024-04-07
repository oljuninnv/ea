/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    screens: {
      mobile: "300px",
      desktop: "984px",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

