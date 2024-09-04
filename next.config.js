/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache")
const withPWA = require("next-pwa")({
  dest: "public",
  // disabled: process.env.NODE_ENV === "development",
  register: true,  skipWaiting: true,
  runtimeCaching,
})

const nextConfig = withPWA({
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  compiler: {
    emotion: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })
    return config
  }
})

module.exports = nextConfig
