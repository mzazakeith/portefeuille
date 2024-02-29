/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath:"/portefeuille",
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
