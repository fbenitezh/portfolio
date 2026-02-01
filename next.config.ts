import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: process.env.IMAGES_REMOTE_HTTP_PROTOCOL as "http" | "https",
        hostname: process.env.IMAGES_REMOTE_HOSTNAME as string,
        port: process.env.IMAGES_REMOTE_PORT as string,
        pathname: process.env.IMAGES_REMOTE_PATHNAME as string,
        search: process.env.IMAGES_REMOTE_SEARCH as string,
      },
    ],
  },
  basePath: process.env.BASE_PATH as string,
  assetPrefix: process.env.ASSET_PREFIX as string,
};

export default nextConfig;
