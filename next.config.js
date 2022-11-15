/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'custom',
    // loaderFile: './customLoaders/imageLoader.js',
    domains: ['via.placeholder.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'via.placeholder.com',
    //   },
    // ],
  },
}

module.exports = nextConfig

