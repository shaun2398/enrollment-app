/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/pages',
  assetPrefix: './',
};

export default   nextConfig;
