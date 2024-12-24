/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techzaa.in",
      },
    ],
  },
};

export default nextConfig;
