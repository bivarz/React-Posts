// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "media4.giphy.com",
      },
      {
        protocol: "https",
        hostname: "media0.giphy.com",
      },
    ],
  },
};

export default nextConfig;
