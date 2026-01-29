import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "www.coupontools.com",
      },
      {
        protocol: "https",
        hostname: "www.puntosparati.com",
      },
      {
        protocol: "https",
        hostname: "i.blogs.es",
      },
      // agrega más dominios si los usas
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
    ],
  },
  /* config options here */
};

export default nextConfig;
