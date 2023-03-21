/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:{
        DEFAULT: '#4C9FCe',
        light:'rgba(78, 168, 222, 0.26)',
        hover: 'rgba(78, 168, 222, 0.12)'
      },
      secondary:{
        DEFAULT: '#162530',
        light:'rgba(19, 41, 75, 0.26)',
        hover: 'rgba(76, 159, 200, 0.26)'
      },
      alert:{
        DEFAULT: '#ECC94B',
        light: '#FDF9EA',
				hover: 'rgb(236, 201, 75, 0.26)',
      },
      success:{
        DEFAULT: '#48BB78',
				light: '#E9F7EF',
				hover: 'rgb(72, 187, 120, 0.26)',
      },
      indigo:{
        DEFAULT: 'rgb(167, 99, 137)',
				light: 'rgb(167, 99, 137, 0.12)',
				hover: 'rgb(167, 99, 137, 0.26)',
      },
      black:'#000000',
      light:'#FFF',
      purple:'#A76389',
      error:'rgb(245, 101, 101)',
      info:'#d1ecf1',
      gray:'#f5f5f5',
      yellow:'#FBF191',
    },
    extend: {},
  },
  plugins: [],
}
