/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable page generation for index page since we're using a static HTML file
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
  trailingSlash: true,
}

module.exports = nextConfig
