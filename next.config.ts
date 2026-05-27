import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [400, 800, 1920],
    imageSizes: [128, 256, 384],
  },
};

export default nextConfig;
