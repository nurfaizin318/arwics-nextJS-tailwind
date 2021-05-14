
// const withImages = require('next-images')


// module.exports = withImages({
//   inlineImageLimit: 16384,
//   webpack(config, options) {
//     return config
//   },
//   domains: ['api.arwics.com','images.unsplash.com','res.cloudinary.com'],
//   exportPathMap: async function (
//     defaultPathMap,
//     { dev, dir, outDir, distDir, buildId }
//   ) {
//     return {
//       '/': { page: '/' },
//       '/About': { page: '/About' },
//       '/Contact': { page: '/Contact' },
//       '/Gallery': { page: '/Gallery' },
//       '/News': { page: '/News' },
//       '/Product': { page: '/Product' },
      
//     }
//   },
//   loader: 'cloudinary',

// })
module.exports = {

 
  webpack: (config, options) => {
    config.optimization.minimize = false;
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
          
        }
      },
  
  };
  