const withOptimizedImages = require('next-optimized-images');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
  optimizeImages: false,
  target: 'serverless',
  pageExtensions: ['page.tsx'],
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];
    return config;
  },
  env: {
    NOW_ENV: process.env.NOW_ENV,
  },
};

module.exports = withOptimizedImages(nextConfig);
