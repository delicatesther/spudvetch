import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  sassOptions: {
    additionalData: '@use "config/index.scss" as *;',
    includePaths: [path.join(__dirname, "src/styles")],
    modules: true,
  },
};

export default nextConfig;
