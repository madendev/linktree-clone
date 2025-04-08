import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "h3xz6yhhtx.ufs.sh",
        port: "",
        pathname: "/**",
      
      },
    ],
  },
};

export default nextConfig;
