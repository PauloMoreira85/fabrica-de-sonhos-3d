import type { Metadata } from "next";
import ListaCatalogo from "@/components/ListaCatalogo";
import { linkWhatsapp, mensagens } from "@/config/site";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Conheça nossas peças em impressão 3D: luminárias, decoração, presentes personalizados e utilidades. Todas podem ser personalizadas.",
};

export default function CatalogoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-creme-100 to-creme-50 pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="bg-pontilhado absolute inset-0 opacity-50" />
        <div
          className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-lilas-200/40 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-creme-900 sm:text-5xl">
            Nosso catálogo
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-creme-700">
            Escolha uma peça pronta ou use como inspiração — tudo pode ser
            personalizado em cor, tamanho e detalhes.
          </p>
        </div>
      </section>

      <ListaCatalogo />

      <section className="bg-creme-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-2xl font-extrabold text-creme-900 sm:text-3xl">
            Não encontrou o que queria?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-creme-700">
            A gente cria do zero. Mande sua ideia e fazemos um projeto
            exclusivo pra você.
          </p>
          <a
            href={linkWhatsapp(mensagens.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-coral-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-coral-500/25 transition-all hover:-translate-y-0.5 hover:bg-coral-600"
          >
            Pedir peça personalizada
          </a>
        </div>
      </section>
    </>
  );
}
