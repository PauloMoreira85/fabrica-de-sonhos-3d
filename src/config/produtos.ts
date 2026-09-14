/**
 * CATÁLOGO DE PRODUTOS
 * ─────────────────────────────────────────────────────────────
 * Para adicionar um produto, copie um bloco { ... } inteiro,
 * cole no final da lista e altere os dados.
 *
 * imagem: coloque a foto em /public/produtos/ e escreva aqui
 *         "/produtos/nome-do-arquivo.jpg".
 *         Deixe como "" para exibir um espaço reservado.
 * preco:  use o formato "R$ 00,00" ou "Sob consulta".
 * destaque: true faz o produto aparecer na página inicial.
 */

export type Categoria =
  | "Decoração"
  | "Presentes"
  | "Personalizados"
  | "Luminárias"
  | "Utilidades";

export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  categoria: Categoria;
  imagem: string;
  destaque: boolean;
};

export const categorias: Categoria[] = [
  "Decoração",
  "Presentes",
  "Personalizados",
  "Luminárias",
  "Utilidades",
];

export const produtos: Produto[] = [
  {
    id: "luminaria-lua",
    nome: "Luminária Lua Cheia",
    descricao:
      "Luminária com textura realista da superfície lunar. Luz quente e aconchegante, perfeita para quartos e salas.",
    preco: "R$ 129,90",
    categoria: "Luminárias",
    imagem: "",
    destaque: true,
  },
  {
    id: "vaso-espiral",
    nome: "Vaso Decorativo Espiral",
    descricao:
      "Vaso com acabamento em espiral contínua. Disponível em várias cores e tamanhos.",
    preco: "R$ 69,90",
    categoria: "Decoração",
    imagem: "",
    destaque: true,
  },
  {
    id: "porta-retrato-nome",
    nome: "Porta-Retrato Personalizado",
    descricao:
      "Porta-retrato com nome ou frase em relevo. Um presente afetivo e exclusivo.",
    preco: "R$ 54,90",
    categoria: "Personalizados",
    imagem: "",
    destaque: true,
  },
  {
    id: "topo-bolo",
    nome: "Topo de Bolo Personalizado",
    descricao:
      "Topo de bolo feito sob medida para aniversários, casamentos e chás de bebê.",
    preco: "R$ 49,90",
    categoria: "Personalizados",
    imagem: "",
    destaque: true,
  },
  {
    id: "organizador-mesa",
    nome: "Organizador de Mesa",
    descricao:
      "Organizador com compartimentos para canetas, clipes e celular. Deixe seu escritório com a sua cara.",
    preco: "R$ 79,90",
    categoria: "Utilidades",
    imagem: "",
    destaque: false,
  },
  {
    id: "chaveiro-personalizado",
    nome: "Chaveiro Personalizado",
    descricao:
      "Chaveiro com nome, logo ou desenho à sua escolha. Ideal para lembrancinhas de festa.",
    preco: "R$ 19,90",
    categoria: "Presentes",
    imagem: "",
    destaque: false,
  },
  {
    id: "suporte-fone",
    nome: "Suporte para Fone de Ouvido",
    descricao:
      "Suporte elegante e resistente para headsets, com base antiderrapante.",
    preco: "R$ 59,90",
    categoria: "Utilidades",
    imagem: "",
    destaque: false,
  },
  {
    id: "caixa-presente",
    nome: "Caixa de Presente Decorada",
    descricao:
      "Caixa com tampa e detalhes em relevo, perfeita para presentear com charme.",
    preco: "R$ 44,90",
    categoria: "Presentes",
    imagem: "",
    destaque: false,
  },
];

export const produtosDestaque = produtos.filter((p) => p.destaque);
