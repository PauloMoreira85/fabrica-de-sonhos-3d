import { linkWhatsapp, mensagens } from "@/config/site";
import type { ProdutoSite } from "@/lib/catalogo";

const moeda = (v: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(v);

export default function CartaoProduto({ produto }: { produto: ProdutoSite }) {
  const esgotado = produto.estoque <= 0;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-creme-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-coral-200 hover:shadow-xl hover:shadow-creme-900/5">
      <div className="relative aspect-square overflow-hidden bg-creme-100">
        {produto.foto_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={produto.foto_url}
            alt={produto.nome}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-creme-100 to-creme-200">
            <div className="text-center">
              <span className="block text-4xl opacity-25">✦</span>
              <span className="mt-2 block px-4 text-[11px] font-semibold tracking-wide text-creme-500 uppercase">
                Foto em breve
              </span>
            </div>
          </div>
        )}

        {produto.categoria && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wide text-creme-800 uppercase shadow-sm backdrop-blur-sm">
            {produto.categoria}
          </span>
        )}

        {esgotado && (
          <span className="absolute top-3 right-3 rounded-full bg-creme-900/85 px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase backdrop-blur-sm">
            Esgotado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-creme-900">
          {produto.nome}
        </h3>
        {produto.descricao && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-creme-700">
            {produto.descricao}
          </p>
        )}
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-display text-xl font-extrabold text-coral-600">
            {moeda(produto.preco)}
          </span>
          <a
            href={linkWhatsapp(mensagens.produto(produto.nome))}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-4 py-2.5 text-xs font-bold transition-colors ${
              esgotado
                ? "bg-creme-200 text-creme-700 hover:bg-creme-300"
                : "bg-creme-900 text-white hover:bg-coral-600"
            }`}
          >
            {esgotado ? "Avise-me" : "Tenho interesse"}
          </a>
        </div>
      </div>
    </article>
  );
}
