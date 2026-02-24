/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
}

module.exports = nextConfig
