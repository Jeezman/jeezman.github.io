import type { NextConfig } from 'next';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/jeezman' : '',
  basePath: isProd ? '/jeezman' : '',
  output: 'export',
};

export default nextConfig;
