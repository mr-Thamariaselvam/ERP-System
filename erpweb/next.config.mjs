/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SCSS
  sassOptions: {
    includePaths: ["./src/styles"],
  },

  // Image optimization
  images: {
    domains: ["your-api-domain.com"], // Add your API domain
  },

  // Environment variables
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },

  // Webpack config for SVG
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
