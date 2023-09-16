/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
};

module.exports = nextConfig;
