import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async rewrites() {
    return [
      {
        source: "/testclient/:path*",
        destination: `http://${process.env.SAP_LOCAL_HOST}/testclient/:path*`,
      },
    ];
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
