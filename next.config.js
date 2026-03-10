/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig
