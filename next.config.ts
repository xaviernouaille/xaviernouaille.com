import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  /** Double passe pour le bundle client (utile si la CI injecte le jeton uniquement via le shell). */
  env: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '',
  },
};

export default nextConfig;
