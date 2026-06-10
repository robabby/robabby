import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
