/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  
};
module.exports = nextConfig

// const withTM = require("next-transpile-modules")(["react-timezone-select"])

// module.exports = withTM({
//   reactStrictMode: true,
//     images: {
//       loader: "akamai",
//       path: "/",
//     },
    
// })


// const withTM = require('next-transpile-modules')(['react-timezone-select']);

// module.exports = withTM({
//   reactStrictMode: true,
//       images: {
//         loader: "akamai",
//         path: "/",
//       },
// })

// module.exports = withTM({
//   experimental: { transpilePackages: ["next-transpile-modules", "react-timezone-select"] },
// });