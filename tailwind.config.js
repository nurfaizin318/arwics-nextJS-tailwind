
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

      '2xl': '2336px',
      // => @media (min-width: 1536px) { ... }

     
    },

    maxHeight: {
     'max':'900px'
     },
    extend: {
      transitionProperty: {
        'height': 'height',
        'width':'width',
      },
      colors: {
        "darkBlue":"#0F70A1",
        "mediumBlue":"#2592CB",
        "softBlue":"#39B4F3",
        "softWhite" : "rgba(250,250,250 ,1)"
      }
    },
 
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
