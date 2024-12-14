import type { NextConfig } from "next";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: `${API_BASE_URL}/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
