import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Paja Trava",
    description: "Održavanje zelenih površina, travnjaci i zalivni sistemi.",
    start_url: "/",
    display: "browser",
    lang: "sr",
    background_color: "#f7f5ee",
    theme_color: "#1f4d2b",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
