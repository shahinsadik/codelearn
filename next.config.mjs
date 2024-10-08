/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flashcubeit.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "kavoneinstitute.com",
        pathname: "/wp-content/uploads/**", // Updated pathname for wp-content
      },
    ],
  },
};

export default nextConfig;
