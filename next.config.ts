import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  output: process.env.NODE_ENV === "production" ? "export" : "standalone",
  basePath: process.env.NODE_ENV === "production" ? "/ml4uhcmut.github.io" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ml4uhcmut.github.io" : "",
  trailingSlash: true,
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;