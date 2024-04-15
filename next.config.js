/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://blog.germaniii.com",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
