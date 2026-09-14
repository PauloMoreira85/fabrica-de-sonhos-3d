"use client";

import { useMemo, useState } from "react";
import { produtos, categorias, type Categoria } from "@/config/produtos";
import CartaoProduto from "@/components/CartaoProduto";

type Filtro = Categoria | "Todos";

export default function ListaCatalogo() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");

  const visiveis = useMemo(
    () =>
      filtro === "Todos"
        ? produtos
        : produtos.filter((p) => p.categoria === filtro),
    [filtro],
  );

  const filtros: Filtro[] = ["Todos", ...categorias];

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
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

        {visiveis.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visiveis.map((produto) => (
              <CartaoProduto key={produto.id} produto={produto} />
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-creme-600">
            Ainda não temos peças nesta categoria — mas podemos criar a sua!
          </p>
        )}
      </div>
    </section>
  );
}
