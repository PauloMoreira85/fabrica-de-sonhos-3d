"use client";

import { useState } from "react";
import { site } from "@/config/site";

const tipos = [
  "Presente personalizado",
  "Peça decorativa",
  "Luminária",
  "Peça técnica / reposição",
  "Protótipo",
  "Outro",
];

const prazos = ["Sem pressa", "Até 15 dias", "Até 7 dias", "É urgente"];

/**
 * Reúne os dados do formulário numa mensagem organizada e abre o
 * WhatsApp já preenchido. Não há backend: nada é armazenado.
 */
export default function FormularioOrcamento() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(tipos[0]);
  const [quantidade, setQuantidade] = useState("1");
  const [prazo, setPrazo] = useState(prazos[0]);
  const [descricao, setDescricao] = useState("");

  function enviar(evento: React.FormEvent) {
    evento.preventDefault();

    const linhas = [
      `Olá! Vim pelo site da ${site.nome} e gostaria de um orçamento.`,
      "",
      `*Nome:* ${nome.trim() || "(não informado)"}`,
      `*Tipo de projeto:* ${tipo}`,
      `*Quantidade:* ${quantidade}`,
      `*Prazo desejado:* ${prazo}`,
      "",
      "*Descrição da ideia:*",
      descricao.trim() || "(vou explicar por aqui)",
    ];

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      linhas.join("\n"),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const rotulo =
    "block text-sm font-bold text-creme-800 mb-2";
  const campo =
    "w-full rounded-xl border border-creme-300 bg-creme-50 px-4 py-3 text-creme-900 outline-none transition-colors placeholder:text-creme-500 focus:border-coral-400 focus:bg-white focus:ring-2 focus:ring-coral-200";

  return (
    <form
      onSubmit={enviar}
      className="rounded-3xl border border-creme-200 bg-white p-6 shadow-lg shadow-creme-900/5 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nome" className={rotulo}>
            Como podemos te chamar?
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="tipo" className={rotulo}>
            Tipo de projeto
          </label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={campo}
          >
            {tipos.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quantidade" className={rotulo}>
            Quantidade
          </label>
          <input
            id="quantidade"
            type="number"
            min="1"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className={campo}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="prazo" className={rotulo}>
            Prazo desejado
          </label>
          <select
            id="prazo"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
            className={campo}
          >
            {prazos.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="descricao" className={rotulo}>
            Conte sua ideia
          </label>
          <textarea
            id="descricao"
            rows={5}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva a peça: tamanho, cor, para que serve, se tem alguma referência…"
            className={`${campo} resize-y`}
          />
          <p className="mt-2 text-xs text-creme-600">
            Tem foto, desenho ou arquivo 3D? É só enviar direto na conversa do
            WhatsApp depois. 😊
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
      >
        Enviar pelo WhatsApp
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-creme-600">
        Ao enviar, abrimos o WhatsApp com sua mensagem já escrita. Você revisa
        antes de mandar — nada é enviado sem você confirmar.
      </p>
    </form>
  );
}
