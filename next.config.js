/** @type {import('next').NextConfig} */

function generateIncludes(modules) {
  return [
    new RegExp(`(${modules.join("|")})$`),
    new RegExp(`(${modules.join("|")})/(?!.*node_modules)`)
  ];
}

const includes = generateIncludes([
  "d3-format" ,// list any other ES module packages here
  '@visx/mock-data',
  '@visx/group',
  '@visx/scale',
  '@visx/shape',
  "@nivo/bar",
  "@nivo/core",
  "@nivo/pie",
  "@nivo/radial-bar",
]);
const nextConfig = {
  reactStrictMode: true,
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // config.externals = config.externals.map((external) => {
    //   if (typeof external !== "function") return external;
    //   return (context, request, callback) => {
    //     return includes.find((i) =>
    //       i.test(
    //         request.startsWith(".") ? path.resolve(context, request) : request
    //       )
    //     )
    //       ? callback() // i.e., not an external
    //       : external(context, request, callback);
    //   };
    // });
    return config;
  },
  images: { unoptimized: true } ,
  output: 'export',
}

// module.exports = {
//   webpack: (config, options) => {
//     config.externals = config.externals.map((external) => {
//       if (typeof external !== "function") return external;
//       return (context, request, callback) => {
//         return includes.find((i) =>
//           i.test(
//             request.startsWith(".") ? path.resolve(context, request) : request
//           )
//         )
//           ? callback() // i.e., not an external
//           : external(context, request, callback);
//       };
//     });
//     return config;
//   },
  
// }; 

module.exports = nextConfig
