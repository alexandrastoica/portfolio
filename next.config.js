/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
    typedRoutes: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
