import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import { site } from "@/config/site";

const fonteTitulo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const fonteTexto = Nunito_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.nome} — ${site.slogan}`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  keywords: [
    "impressão 3D",
    "peças em 3D",
    "presentes criativos",
    "luminária 3D",
    "decoração 3D",
    site.cidade,
  ],
  openGraph: {
    title: `${site.nome} — ${site.slogan}`,
    description: site.descricao,
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
  },

  /** Ícone e nome curto ao salvar na tela de início do celular. */
  appleWebApp: {
    title: "Fábrica de Sonhos 3D",
    capable: true,
    statusBarStyle: "default",
  },

  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f65a2c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fonteTitulo.variable} ${fonteTexto.variable} antialiased`}
      >
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
        <BotaoWhatsapp />
      </body>
    </html>
  );
}
