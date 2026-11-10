import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`, which is
  // deployed to GitHub Pages by .github/workflows/deploy.yml.
  output: 'export',
  images: {
    // GitHub Pages has no image-optimization server; serve images as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
};

export default nextConfig;
