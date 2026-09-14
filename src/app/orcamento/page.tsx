import type { Metadata } from "next";
import FormularioOrcamento from "@/components/FormularioOrcamento";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Encomendas e orçamento",
  description:
    "Peça um orçamento gratuito para sua peça personalizada em impressão 3D. Conte sua ideia e recebemos direto no WhatsApp.",
};

const perguntas = [
  {
    pergunta: "Preciso ter um arquivo 3D pronto?",
    resposta:
      "Não! Pode mandar uma foto, um desenho no papel ou só descrever o que imaginou. Se precisar, criamos o modelo 3D para você.",
  },
  {
    pergunta: "Quanto custa?",
    resposta:
      "Depende do tamanho, do material e da complexidade da peça. Por isso fazemos um orçamento individual — e ele é sempre gratuito e sem compromisso.",
  },
  {
    pergunta: "Qual o prazo de entrega?",
    resposta: `Na maioria dos casos, de ${site.prazoMedio} após a aprovação do orçamento. Peças maiores ou em grande quantidade podem levar um pouco mais.`,
  },
  {
    pergunta: "Vocês entregam em todo o Brasil?",
    resposta:
      "Sim! Enviamos pelos Correios ou transportadora, com embalagem reforçada. O frete é calculado na hora do orçamento.",
  },
  {
    pergunta: "Dá para fazer em qualquer cor?",
    resposta:
      "Temos uma variedade grande de cores disponíveis. Na conversa a gente mostra as opções e você escolhe a que mais combina.",
  },
  {
    pergunta: "Posso encomendar em grande quantidade?",
    resposta:
      "Claro! Fazemos lembrancinhas de festa, brindes corporativos e lotes maiores — com desconto progressivo por quantidade.",
  },
];

export default function OrcamentoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-creme-100 to-creme-50 pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="bg-pontilhado absolute inset-0 opacity-50" />
        <div
          className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-coral-200/35 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-creme-900 sm:text-5xl">
            Conte sua ideia
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-creme-700">
            Preencha os campos abaixo e a gente já recebe tudo organizado no
            WhatsApp. Orçamento gratuito e sem compromisso.
          </p>
        </div>
      </section>

      <section className="bg-creme-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <FormularioOrcamento />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-display text-center text-3xl font-extrabold tracking-tight text-creme-900 sm:text-4xl">
            Perguntas frequentes
          </h2>

          <div className="mt-12 space-y-3">
            {perguntas.map((item) => (
              <details
                key={item.pergunta}
                className="group rounded-2xl border border-creme-200 bg-creme-50 px-6 py-5 transition-colors open:border-coral-200 open:bg-white"
              >
                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-creme-900 marker:content-none">
                  {item.pergunta}
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-creme-200 text-creme-700 transition-transform duration-300 group-open:rotate-45 group-open:bg-coral-100 group-open:text-coral-600"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3.5 leading-relaxed text-creme-700">
                  {item.resposta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
