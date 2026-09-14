/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * ─────────────────────────────────────────────────────────────
 * Este é o único arquivo que você precisa editar para mudar
 * contato, textos principais e informações da empresa.
 * Não é necessário saber programar para alterar o que está aqui.
 */

export const site = {
  nome: "Fábrica de Sonhos 3D",
  slogan: "Damos forma aos seus sonhos",
  descricao:
    "Peças exclusivas em impressão 3D: decoração, luminárias e presentes únicos, feitos com carinho e prontos para enviar.",

  /**
   * ⚠️ TROQUE AQUI PELO WHATSAPP REAL
   * Formato: código do país + DDD + número, somente dígitos.
   * Exemplo para (31) 98888-7777 → "5531988887777"
   */
  whatsapp: "5500000000000",

  email: "contato@fabricadesonhos3d.com.br",
  instagram: "fabricadesonhos3d",
  cidade: "Sua Cidade",
  estado: "MG",

  /** Prazo médio exibido no site */
  prazoMedio: "3 a 7 dias",
} as const;

/** Monta um link de WhatsApp com mensagem pronta. */
export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagens pré-preenchidas usadas nos botões do site. */
export const mensagens = {
  geral: `Olá! Vim pelo site da ${site.nome} e gostaria de mais informações.`,
  comprar: `Olá! Vim pelo site e gostaria de saber mais sobre as peças disponíveis.`,
  produto: (nome: string) =>
    `Olá! Tenho interesse no produto "${nome}" que vi no site. Ele está disponível?`,
} as const;
