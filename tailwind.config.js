
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    screens: {
      'xs': '180px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mds': '868px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }


      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '  1536px',
      // => @media (min-width: 1536px) { ... }


    },

    maxHeight: {
      'max': '900px'
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
      colors: {
        "darkBlue": "#0F70A1",
        "mediumBlue": "#2592CB",
        "softBlue": "#39B4F3",
        "softWhite": "rgba(250,250,250 ,1)"
      },
      height: theme => ({
        "128": "48rem",
   
      }),
    },

  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
