/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens: {
      'xs': {'raw': '(min-width: 300px),(max-width: 1000px)'},
      'lg': '1024px'

    },
    extend: {
      colors: {
        'error': '#E94858'
      }
    },
  },
  plugins: [],
}

