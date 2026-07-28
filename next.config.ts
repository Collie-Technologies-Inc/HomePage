import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sites serves public assets directly; bypass the runtime image optimizer.
    unoptimized: true,
  },
};

export default nextConfig;
