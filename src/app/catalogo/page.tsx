import type { Metadata } from "next";
import ListaCatalogo from "@/components/ListaCatalogo";
import { linkWhatsapp, mensagens } from "@/config/site";
import { buscarProdutos, buscarCategorias } from "@/lib/catalogo";

/** Revalida a cada 5 minutos: o que for cadastrado no PDV aparece aqui. */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Conheça nossas peças em impressão 3D: luminárias, decoração, presentes e utilidades. Todas prontas para envio.",
};

export default async function CatalogoPage() {
  const [produtos, categorias] = await Promise.all([
    buscarProdutos(),
    buscarCategorias(),
  ]);

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
            Todas as peças abaixo já estão produzidas e prontas para enviar.
            Clique em uma delas para falar com a gente.
          </p>
        </div>
      </section>

      <ListaCatalogo produtos={produtos} categorias={categorias} />

      <section className="bg-creme-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-2xl font-extrabold text-creme-900 sm:text-3xl">
            Ficou com alguma dúvida?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-creme-700">
            Chama a gente no WhatsApp. Temos prazer em contar tudo sobre as
            peças, cores disponíveis e envio.
          </p>
          <a
            href={linkWhatsapp(mensagens.comprar)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full bg-coral-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-coral-500/25 transition-all hover:-translate-y-0.5 hover:bg-coral-600"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
