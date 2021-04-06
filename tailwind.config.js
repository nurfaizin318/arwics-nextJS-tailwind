
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '180px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'width':'width',
      },
      colors: {
        'custom-yellow':'#FFDC41',
        'custom-blue': '#39B4F3',
        'custom-red':'#FF3838'
      }
    },
    boxShadow:{
      blue:'0 4px 30px 0 rgba(48,63,159 ,0.2)',
      strongBlue:'0 4px 15px 0 rgba(48,63,159 ,0.5)',
      yellow:'0 4px 30px 0 rgba(255,179,0 ,0.5)',
      red:'0 4px 30px 0 rgba(229,57,53 ,0.5)'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
