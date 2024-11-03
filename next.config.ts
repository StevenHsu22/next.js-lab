import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // pnpm install next@canary
  experimental: {
    ppr: 'incremental',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
