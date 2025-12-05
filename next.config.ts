import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  compress: true,

  images: {
    unoptimized: true,
  }

};

export default nextConfig;
