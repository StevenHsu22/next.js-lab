import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // pnpm install next@canary
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
