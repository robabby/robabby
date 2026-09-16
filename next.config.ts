import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in ~/Workbench makes Turbopack infer the parent dir as
  // the workspace root and load its postcss config; pin the root here.
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/resume.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  async redirects() {
    return [
      // Per-application source attribution: print robabby.com/via/<slug> on a
      // resume or outreach message and GA4 records the landing as /?src=<slug>
      // (page_location keeps the query), so each application is measurable.
      {
        source: "/via/:slug",
        destination: "/?src=:slug",
        permanent: false,
      },
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
