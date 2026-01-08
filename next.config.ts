import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // @ts-ignore - allowedDevOrigins is a new property in Next.js 15
  allowedDevOrigins: ['192.168.140.57'],
};

export default nextConfig;
