/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'xs': {'raw': '(min-width: 300px),(max-width: 900px)'},
      'lg': '901px'

    },
    extend: {
      colors: {
        'error': '#E94858'
      }
    },
  },
  plugins: [],
}

