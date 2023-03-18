/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // exportPathMap: function () {
  //   return {
  //     "/": {
  //       page: "/",
  //     },
  //   };
  // },
};

module.exports = nextConfig;
