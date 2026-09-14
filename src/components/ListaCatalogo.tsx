"use client";

import { useMemo, useState } from "react";
import CartaoProduto from "@/components/CartaoProduto";
import type { ProdutoSite } from "@/lib/catalogo";

type Props = {
  produtos: ProdutoSite[];
  categorias: string[];
};

export default function ListaCatalogo({ produtos, categorias }: Props) {
  const [filtro, setFiltro] = useState<string>("Todos");

  const visiveis = useMemo(
    () =>
      filtro === "Todos"
        ? produtos
        : produtos.filter((p) => p.categoria === filtro),
    [produtos, filtro],
  );

  const filtros = ["Todos", ...categorias];

  if (produtos.length === 0) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <span className="block text-5xl opacity-30">✦</span>
          <h2 className="font-display mt-4 text-xl font-bold text-creme-900">
            Nossas peças estão a caminho
          </h2>
          <p className="mt-2 text-creme-700">
            Estamos preparando o catálogo com muito carinho. Volte em breve!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        {categorias.length > 1 && (
          <div
            className="flex flex-wrap justify-center gap-2.5"
            role="group"
            aria-label="Filtrar por categoria"
          >
            {filtros.map((item) => {
              const ativo = filtro === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFiltro(item)}
                  aria-pressed={ativo}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    ativo
                      ? "bg-coral-500 text-white shadow-md shadow-coral-500/25"
                      : "border border-creme-300 bg-creme-50 text-creme-700 hover:border-coral-300 hover:text-coral-700"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}

        {visiveis.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiveis.map((produto) => (
              <CartaoProduto key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-creme-600">
            Nenhuma peça nesta categoria no momento.
          </p>
        )}
      </div>
    </section>
  );
}
