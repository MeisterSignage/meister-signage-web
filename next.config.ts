import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/meister-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
