import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nile AI Solutions",
    short_name: "Nile AI",
    description:
      "AI-powered software, automation and digital solutions for African organisations.",

    start_url: "/",
    display: "standalone",

    background_color: "#f8fbff",
    theme_color: "#0fbf9f",

    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
