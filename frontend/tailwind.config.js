/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

// module.exports = {
//   mode: 'jit',
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
// }
