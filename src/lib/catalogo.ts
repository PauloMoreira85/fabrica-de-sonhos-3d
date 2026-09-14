import { createClient } from "@supabase/supabase-js";

/**
 * Catálogo público, lido do mesmo banco que o PDV usa.
 *
 * O cadastro é feito no PDV (tela Produtos); o que estiver marcado
 * como "no site" aparece aqui. As políticas do banco só permitem
 * leitura de produtos ativos e publicados.
 */
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export type ProdutoSite = {
  id: string;
  nome: string;
  descricao: string | null;
  preco: number;
  foto_url: string | null;
  material: string | null;
  estoque: number;
  destaque: boolean;
  categoria: string | null;
};

type LinhaProduto = {
  id: string;
  nome: string;
  descricao: string | null;
  preco: number | string;
  foto_url: string | null;
  material: string | null;
  estoque: number;
  destaque: boolean;
  categorias: { nome: string } | { nome: string }[] | null;
};

function normalizar(linha: LinhaProduto): ProdutoSite {
  const cat = Array.isArray(linha.categorias)
    ? linha.categorias[0]
    : linha.categorias;
  return {
    id: linha.id,
    nome: linha.nome,
    descricao: linha.descricao,
    preco: Number(linha.preco),
    foto_url: linha.foto_url,
    material: linha.material,
    estoque: linha.estoque,
    destaque: linha.destaque,
    categoria: cat?.nome ?? null,
  };
}

/** Todos os produtos publicados, com o nome da categoria. */
export async function buscarProdutos(): Promise<ProdutoSite[]> {
  const { data, error } = await supabase
    .from("produtos")
    .select(
      "id, nome, descricao, preco, foto_url, material, estoque, destaque, categorias(nome)",
    )
    .order("ordem")
    .order("nome");

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
  return (data as LinhaProduto[]).map(normalizar);
}

/** Produtos marcados para aparecer na página inicial. */
export async function buscarDestaques(): Promise<ProdutoSite[]> {
  const produtos = await buscarProdutos();
  const destaques = produtos.filter((p) => p.destaque);
  // Sem destaques marcados, mostra os primeiros para a home não ficar vazia.
  return (destaques.length > 0 ? destaques : produtos).slice(0, 4);
}

/** Categorias que têm ao menos um produto publicado. */
export async function buscarCategorias(): Promise<string[]> {
  const produtos = await buscarProdutos();
  const nomes = new Set(
    produtos.map((p) => p.categoria).filter((c): c is string => Boolean(c)),
  );
  return [...nomes];
}
