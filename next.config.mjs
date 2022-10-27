/**
   * @type {import('next').NextConfig}
   */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "./pages",
  assetPrefix: "./pages/",
};

export default nextConfig;
