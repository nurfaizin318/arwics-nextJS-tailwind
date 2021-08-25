const { target } = require("./webpack.config");


module.exports = {
  
                   
    
  trailingSlash: true,
  webpack: (config, options) => {
    config.optimization.minimize = true;
    

  return config
  },

    images: {
      domains: ['api.arwics.com','images.unsplash.com','res.cloudinary.com'],
      // deviceSizes: [320, 420, 768, 1024, 1200],
      loader: 'cloudinary',
      // path: 'cloudinary://774874966656811:4q-UDjejk_QY8Yn7DPUa0dypTow@dn3baky3u'

    },
      exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/About': { page: '/About' },
          '/Contact': { page: '/Contact' },
          '/Gallery': { page: '/Gallery' },
          '/News': { page: '/News' },
          '/Product': { page: '/Product' },
          '/Login': { page: '/Login' },
          '/Admin/Home': { page:  '/Admin/Home' },
          '/Admin/Product': { page:  '/Admin/Product' },
          '/Admin/Contact': { page:  '/Admin/Contact' },
          '/Admin/Gallery': { page:  '/Admin/Gallery' },
          '/Admin/Product': { page:  '/Admin/Product' },
          
        }
      },
      // env:{
      //   REACT_APP_API_KEY= 'AIzaSyBUbEFwyJ53sR6Tff5Ie8A5iJpMWe8lV7I',
      //   REACT_APP_AUTH_DOMAIN="newarwics.firebaseapp.com",
      //   REACT_APP_PROJECT_ID="newarwics",
      //   REACT_APP_STORAGE_BUCKET="newarwics.appspot.com",
      //   REACT_APP_MESSAGING_SENDER_ID="655027417973",
      //   REACT_APP_APP_ID="1:655027417973:web:3bfd2d0d28403fe905193c",
      //   REACT_APP_MEASUREMENT_ID="G-52PFTY4EQ2"
      // } ,

  };
  