import type { NextConfig } from "next";

// Files needed at runtime by the /api/source/* export endpoints
const sourceTracing = [
  "./src/**/*",
  "./public/images/*",
  "./package.json",
  "./tsconfig.json",
  "./next.config.ts",
  "./postcss.config.mjs",
  "./drizzle.config.json",
  "./eslint.config.mjs",
  "./.gitignore",
  "./README.md",
  "./.env.example",
];

const nextConfig: NextConfig = {
  // Include project files in the function bundles
  // so the admin "export files" feature works in production too.
  outputFileTracingIncludes: {
    "/api/source": sourceTracing,
    "/api/source/zip": sourceTracing,
  },
};

export default nextConfig;
