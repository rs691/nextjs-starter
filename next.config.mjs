/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/nextjs-starter', // Repo name
    assetPrefix: '/nextjs-starter/', // Repo name
      images: {
    unoptimized: true // Disable image optimization
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
