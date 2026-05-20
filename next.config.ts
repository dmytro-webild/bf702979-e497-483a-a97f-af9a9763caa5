import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.sandbox-staging.webild.io", "*.webildsbx.cc", "*.webild.io"],
  devIndicators: false,
  experimental: {
      serverComponentsHmrCache: false,
  },
  images: {
            localPatterns: [
          {
              pathname: '/**',
          },
      ],
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'webuild-dev.s3.eu-north-1.amazonaws.com',
          },
          {
              protocol: 'https',
              hostname: 'img.b2bpic.net',
          },
          {
              protocol: 'https',
              hostname: 'freepik.com',
          },
      ],
  }
};

export default nextConfig;
