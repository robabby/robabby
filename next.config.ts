import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in ~/Workbench makes Turbopack infer the parent dir as
  // the workspace root and load its postcss config; pin the root here.
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/wavepoint",
        destination: "https://wavepoint.space",
        permanent: false,
      },
      {
        source: "/sherpa",
        destination: "https://sherpa.solar",
        permanent: false,
      },
      {
        source: "/vault",
        destination: "https://ai-ready-vault.vercel.app",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/robabby",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
