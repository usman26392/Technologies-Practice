import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow images from localhost
  images: {
    // domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
