/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/docs',
  assetPrefix: './',
};

export default   nextConfig;
