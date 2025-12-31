import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "autumnplazaapartments.com",
      },
      {
        protocol: "https",
        hostname: "www.autumnplazaapartments.com",
      },
    ],

    qualities: [90, 65, 75, 100],
    formats: ["image/webp"],
  },

  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
