import type { MetadataRoute } from "next";

/**
 * Manifest do app — é isto que o Android/Chrome lê ao "Adicionar à
 * tela de início". O iPhone usa o apple-touch-icon do layout; os dois
 * caminhos são independentes e precisam existir juntos.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fábrica de Sonhos 3D",
    short_name: "Sonhos 3D",
    description:
      "Peças exclusivas em impressão 3D: decoração, luminárias e presentes únicos.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfcfa",
    theme_color: "#f65a2c",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
