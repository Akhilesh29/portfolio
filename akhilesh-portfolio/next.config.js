/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "media.licdn.com", pathname: "/**" },
      { protocol: "https", hostname: "static.wixstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "secureu.in", pathname: "/**" },
    ],
  },
};
module.exports = nextConfig;
