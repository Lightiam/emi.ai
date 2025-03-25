/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['react-icons'],
  webpack: (config) => {
    // Add polyfills for regeneratorRuntime
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    return config;
  },
}

module.exports = nextConfig
