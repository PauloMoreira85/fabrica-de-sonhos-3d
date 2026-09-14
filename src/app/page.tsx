import Link from "next/link";
import { site, linkWhatsapp, mensagens } from "@/config/site";
import { buscarDestaques } from "@/lib/catalogo";
import CartaoProduto from "@/components/CartaoProduto";

/** Revalida a cada 5 minutos: o que for cadastrado no PDV aparece aqui. */
export const revalidate = 300;

const passos = [
  {
    numero: "01",
    titulo: "Escolha sua peça",
    texto:
      "Navegue pelo catálogo e veja as peças disponíveis, todas já prontinhas para enviar.",
    icone: "🔎",
  },
  {
    numero: "02",
    titulo: "Chame no WhatsApp",
    texto:
      "Clique em 'Tenho interesse' e fale direto com a gente. Tiramos suas dúvidas na hora.",
    icone: "💬",
  },
  {
    numero: "03",
    titulo: "Receba em casa",
    texto:
      "Combinamos o pagamento e a entrega. Enviamos para todo o Brasil com embalagem reforçada.",
    icone: "📦",
  },
];

const materiais = [
  {
    nome: "PLA",
    texto:
      "Acabamento lindo e cores vibrantes. Perfeito para decoração e presentes.",
  },
  {
    nome: "PETG",
    texto: "Mais resistente e durável. Ideal para peças de uso diário.",
  },
  {
    nome: "Resina",
    texto: "Detalhes finíssimos de 0,05 mm. A escolha para miniaturas.",
  },
  {
    nome: "TPU flexível",
    texto: "Macio e dobrável, sem perder a forma. Ótimo para capinhas e apoios.",
  },
];

const diferenciais = [
  {
    icone: "✨",
    titulo: "Peças exclusivas",
    texto: "Criações pensadas com carinho, que você não encontra em qualquer lugar.",
  },
  {
    icone: "📦",
    titulo: "Pronta entrega",
    texto: "O que está no catálogo já está produzido e sai rapidinho.",
  },
  {
    icone: "💝",
    titulo: "Feito à mão",
    texto: "Cada peça é revisada uma a uma antes de sair daqui.",
  },
  {
    icone: "💬",
    titulo: "Atendimento humano",
    texto: "Você fala direto com quem produziu a sua peça.",
  },
  {
    icone: "🌱",
    titulo: "Material consciente",
    texto: "Trabalhamos com PLA, um plástico de origem vegetal.",
  },
  {
    icone: "🇧🇷",
    titulo: "Enviamos pro Brasil todo",
    texto: "Embalagem reforçada para a peça chegar perfeita.",
  },
];

export default async function Home() {
  const destaques = await buscarDestaques();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-creme-100 via-creme-50 to-creme-50 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="bg-pontilhado absolute inset-0 opacity-50" />
        <div
          className="animar-flutuar absolute -top-24 -right-24 h-96 w-96 rounded-full bg-coral-200/35 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-lilas-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <span className="animar-entrada inline-flex items-center gap-2 rounded-full border border-coral-200 bg-white/80 px-4 py-2 text-xs font-bold tracking-wide text-coral-700 uppercase shadow-sm backdrop-blur-sm">
            ✦ Peças em impressão 3D
          </span>

          <h1 className="animar-entrada font-display mx-auto mt-7 max-w-4xl text-4xl leading-[1.08] font-extrabold tracking-tight text-creme-900 sm:text-6xl lg:text-7xl">
            Damos forma aos{" "}
            <span className="bg-gradient-to-r from-coral-500 to-lilas-500 bg-clip-text text-transparent">
              seus sonhos
            </span>
          </h1>

          <p className="animar-entrada mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-creme-700 sm:text-xl">
            Peças decorativas, luminárias e presentes criados com carinho —
            prontinhos para chegar até você.
          </p>

          <div className="animar-entrada mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/catalogo"
              className="w-full rounded-full bg-coral-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-coral-500/25 transition-all hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-2xl hover:shadow-coral-500/35 sm:w-auto"
            >
              Ver o catálogo
            </Link>
            <a
              href={linkWhatsapp(mensagens.comprar)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-2 border-creme-300 bg-white/70 px-8 py-4 text-base font-bold text-creme-800 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-coral-300 hover:text-coral-700 sm:w-auto"
            >
              Falar no WhatsApp
            </a>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { valor: "Pronta", rotulo: "entrega" },
              { valor: site.prazoMedio, rotulo: "para chegar" },
              { valor: "Brasil", rotulo: "todo" },
            ].map((item) => (
              <div key={item.rotulo} className="text-center">
                <dt className="font-display text-2xl font-extrabold text-coral-600 sm:text-3xl">
                  {item.valor}
                </dt>
                <dd className="mt-1 text-xs font-semibold tracking-wide text-creme-600 uppercase sm:text-sm">
                  {item.rotulo}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Como funciona ────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-creme-900 sm:text-4xl">
              Como comprar
            </h2>
            <p className="mt-4 text-lg text-creme-700">
              Três passos simples até a peça chegar na sua casa.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {passos.map((passo) => (
              <li
                key={passo.numero}
                className="relative rounded-2xl border border-creme-200 bg-creme-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-coral-200 hover:shadow-lg hover:shadow-creme-900/5"
              >
                <span className="font-display absolute top-5 right-6 text-5xl font-extrabold text-creme-200 select-none">
                  {passo.numero}
                </span>
                <span className="block text-3xl" aria-hidden="true">
                  {passo.icone}
                </span>
                <h3 className="font-display mt-4 text-xl font-bold text-creme-900">
                  {passo.titulo}
                </h3>
                <p className="mt-2.5 leading-relaxed text-creme-700">
                  {passo.texto}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link
              href="/catalogo"
              className="inline-block rounded-full bg-coral-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-coral-500/25 transition-all hover:-translate-y-0.5 hover:bg-coral-600"
            >
              Ver todas as peças
            </Link>
          </div>
        </div>
      </section>

      {/* ── Destaques do catálogo ────────────────────────── */}
      {destaques.length > 0 && (
        <section className="bg-creme-100 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-creme-900 sm:text-4xl">
                  Feitos com amor
                </h2>
                <p className="mt-4 text-lg text-creme-700">
                  Algumas das nossas peças favoritas, prontinhas para enviar.
                </p>
              </div>
              <Link
                href="/catalogo"
                className="shrink-0 rounded-full border-2 border-creme-300 bg-white px-6 py-3 text-sm font-bold text-creme-800 transition-all hover:border-coral-300 hover:text-coral-700"
              >
                Ver tudo →
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destaques.map((produto) => (
                <CartaoProduto key={produto.id} produto={produto} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Materiais ────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-creme-900 sm:text-4xl">
              Nossos materiais
            </h2>
            <p className="mt-4 text-lg text-creme-700">
              Cada peça é feita com o material mais adequado para ela.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materiais.map((material) => (
              <div
                key={material.nome}
                className="rounded-2xl border border-creme-200 bg-creme-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lilas-200 hover:shadow-lg hover:shadow-creme-900/5"
              >
                <h3 className="font-display text-lg font-extrabold text-lilas-700">
                  {material.nome}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-creme-700">
                  {material.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais ─────────────────────────────────── */}
      <section className="bg-creme-100 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-creme-900 sm:text-4xl">
              Por que a {site.nome}?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="flex gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-2xl shadow-sm"
                  aria-hidden="true"
                >
                  {item.icone}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-creme-900">
                    {item.titulo}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-creme-700">
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chamada final ────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coral-500 to-lilas-600 py-20 sm:py-24">
        <div
          className="animar-flutuar absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Encontrou algo que gostou?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Chama a gente no WhatsApp que a gente te conta tudo sobre a peça
            e combina a entrega.
          </p>
          <a
            href={linkWhatsapp(mensagens.comprar)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-white px-9 py-4 text-base font-bold text-coral-600 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
