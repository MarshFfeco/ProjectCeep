/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',
        'lg': '900px'
      },
      colors: {
        'error': '#E94858'
      },
    },
  },
  plugins: [],
}

