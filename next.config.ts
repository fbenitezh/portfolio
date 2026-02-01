import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: false,
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

export default nextConfig;
