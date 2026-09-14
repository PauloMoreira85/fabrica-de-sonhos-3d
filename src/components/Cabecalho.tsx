"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site, linkWhatsapp, mensagens } from "@/config/site";

const navegacao = [
  { href: "/", rotulo: "Início" },
  { href: "/catalogo", rotulo: "Catálogo" },
];

export default function Cabecalho() {
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 16);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou
          ? "bg-creme-50/90 shadow-sm shadow-creme-900/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuAberto(false)}
          aria-label={`${site.nome} — página inicial`}
        >
          <Image
            src="/logo.png"
            alt={site.nome}
            width={382}
            height={170}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        {/* Navegação — telas médias e maiores */}
        <nav className="hidden items-center gap-8 md:flex">
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-creme-700 transition-colors hover:text-coral-600"
            >
              {item.rotulo}
            </Link>
          ))}
          <a
            href={linkWhatsapp(mensagens.comprar)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-coral-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral-500/25 transition-all hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-xl hover:shadow-coral-500/30"
          >
            Fale conosco
          </a>
        </nav>

        {/* Botão do menu — telas pequenas */}
        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-creme-800 transition-colors hover:bg-creme-200 md:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                menuAberto ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                menuAberto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                menuAberto ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu recolhível — telas pequenas */}
      <div
        className={`overflow-hidden border-creme-200 bg-creme-50/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          menuAberto ? "max-h-80 border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5">
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuAberto(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-creme-800 transition-colors hover:bg-creme-200"
            >
              {item.rotulo}
            </Link>
          ))}
          <a
            href={linkWhatsapp(mensagens.comprar)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuAberto(false)}
            className="mt-2 rounded-full bg-coral-500 px-5 py-3 text-center text-base font-bold text-white shadow-lg shadow-coral-500/25"
          >
            Fale conosco
          </a>
        </nav>
      </div>
      <span className="sr-only">{site.nome}</span>
    </header>
  );
}
