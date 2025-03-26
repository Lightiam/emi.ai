/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['react-icons'],
  webpack: (config, { isServer, dev }) => {
    // Add polyfills for regeneratorRuntime
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    
    // Add entry for polyfills
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      
      if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
        entries['main.js'] = ['./polyfills.js', ...entries['main.js']];
      }
      
      return entries;
    };
    
    return config;
  },
}

module.exports = nextConfig
