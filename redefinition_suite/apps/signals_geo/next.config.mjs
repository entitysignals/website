/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@redefinition/ui", "@redefinition/design-tokens"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;


