import Link from "next/link";
import Image from "next/image";
import { site, linkWhatsapp, mensagens } from "@/config/site";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-creme-200 bg-creme-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/logo.png"
            alt={site.nome}
            width={382}
            height={170}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-creme-700">
            {site.descricao}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wide text-creme-900 uppercase">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-creme-700">
            <li>
              <Link href="/" className="transition-colors hover:text-coral-600">
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/catalogo"
                className="transition-colors hover:text-coral-600"
              >
                Catálogo
              </Link>
            </li>
            <li>
              <Link
                href="/orcamento"
                className="transition-colors hover:text-coral-600"
              >
                Encomendas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wide text-creme-900 uppercase">
            Contato
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-creme-700">
            <li>
              <a
                href={linkWhatsapp(mensagens.geral)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-coral-600"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-coral-600"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-coral-600"
              >
                @{site.instagram}
              </a>
            </li>
            <li>
              {site.cidade} — {site.estado}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wide text-creme-900 uppercase">
            Tem uma ideia?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-creme-700">
            Conte pra gente o que você imaginou. O orçamento é gratuito.
          </p>
          <a
            href={linkWhatsapp(mensagens.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-coral-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-coral-600"
          >
            Pedir orçamento
          </a>
        </div>
      </div>

      <div className="border-t border-creme-200">
        <div className="mx-auto max-w-6xl px-5 py-5 text-center text-xs text-creme-600">
          © {ano} {site.nome}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
