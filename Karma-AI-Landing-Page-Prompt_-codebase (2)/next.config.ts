import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.GITHUB_PAGES === 'true' ? 'export' : undefined,
  trailingSlash: process.env.GITHUB_PAGES === 'true' ? true : undefined,
  images: {
    unoptimized: process.env.GITHUB_PAGES === 'true' ? true : undefined
  },
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;