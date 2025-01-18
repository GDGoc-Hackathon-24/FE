import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://15.165.124.17:8080/api/:path*", // HTTP 백엔드 URL
      },
    ];
  },
};

export default nextConfig;
