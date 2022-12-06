/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "myautoabo.fra1.digitaloceanspaces.com"],
  },
  redirects: async () => [
    {
      source: "/:path*",
      has: [{ type: "host", value: "puppypals.de" }],
      destination: "https://www.puppypals.de/:path*",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
