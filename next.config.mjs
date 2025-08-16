/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/nextjs-starter', // Repo name
    assetPrefix: '/nextjs-starter/', // Repo name
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
