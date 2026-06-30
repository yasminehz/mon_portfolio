import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mon_portfolio",
  assetPrefix: "/mon_portfolio",
  images: { unoptimized: true },
};

export default nextConfig;