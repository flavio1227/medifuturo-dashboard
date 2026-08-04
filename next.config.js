/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/medifuturo-dashboard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/medifuturo-dashboard' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;