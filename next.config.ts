import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" && Boolean(repositoryName);

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPagesBuild ? `/${repositoryName}` : undefined,
  assetPrefix: isGithubPagesBuild ? `/${repositoryName}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
