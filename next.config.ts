import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fastly.picsum.photos",
        protocol: "https",
        pathname: "/**"
      },
      {
        hostname: "picsum.photos",
        protocol: "https",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
