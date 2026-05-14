import { imageHosts } from './image-hosts.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
      ignoreBuildErrors: true,
    },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home-page',
        permanent: false,
      },
      {
        source: '/futbolcu-bul',
        destination: 'https://apps.apple.com/tr/app/futbolcu-bul-quiz/id6767035364?l=tr',
        permanent: false,
      },
    ];
  }
};

export default nextConfig;
