# Fábrica de Sonhos 3D

Site institucional e catálogo de impressão 3D personalizada, com conversão
via WhatsApp (sem carrinho e sem pagamento online).

---

## ⚠️ Primeiro passo: colocar o WhatsApp de verdade

O site inteiro leva o cliente para o WhatsApp, então **esse é o ajuste mais
importante**. Sem ele, nenhum botão funciona.

Abra o arquivo `src/config/site.ts` e troque a linha do `whatsapp`:

```ts
whatsapp: "5500000000000",   // ← troque por: 55 + DDD + número
```

O número vai **sem espaço, sem traço e sem parênteses**, começando com `55`
(código do Brasil).

| Número real      | Como escrever    |
| ---------------- | ---------------- |
| (31) 98888-7777  | `5531988887777`  |
| (11) 97777-6666  | `5511977776666`  |

No mesmo arquivo também dá para mudar e-mail, Instagram, cidade e prazo.

---

## Rodando o site no seu computador

Só precisa fazer isso uma vez, para instalar:

```bash
npm install
```

Depois, sempre que quiser ver o site:

```bash
npm run dev
```

Abra o endereço http://localhost:3000 no navegador. Enquanto esse comando
estiver rodando, qualquer alteração aparece na hora.

Para parar, aperte `Ctrl + C` no terminal.

---

## Como adicionar ou mudar produtos

Todos os produtos ficam em `src/config/produtos.ts`.

Para **adicionar** um produto, copie um bloco inteiro (de `{` até `},`),
cole logo abaixo e mude os dados:

```ts
{
  id: "nome-curto-sem-espacos",     // precisa ser diferente dos outros
  nome: "Luminária Estrela",
  descricao: "Uma descrição curta e gostosa de ler.",
  preco: "R$ 99,90",                // ou "Sob consulta"
  categoria: "Luminárias",          // veja as categorias abaixo
  imagem: "/produtos/estrela.jpg",  // ou "" se ainda não tiver foto
  destaque: true,                   // true = aparece na página inicial
},
```

**Categorias disponíveis:** `Decoração`, `Presentes`, `Personalizados`,
`Luminárias`, `Utilidades`.

Se precisar de uma categoria nova, adicione-a nas duas listas no topo do
arquivo (`Categoria` e `categorias`).

### Colocando as fotos

1. Salve a foto na pasta `public/produtos/`
2. No produto, escreva o caminho: `imagem: "/produtos/nome-da-foto.jpg"`

Dicas para as fotos ficarem bonitas:

- Use imagens **quadradas** (ex.: 800 × 800 pixels)
- Fundo claro e liso valoriza a peça
- Comprima em <https://squoosh.app> para o site carregar rápido

Produto sem foto mostra um espaço reservado elegante — o site não quebra.

---

## Mudando as cores

As cores estão no topo de `src/app/globals.css`, em três famílias:

- **coral** — cor principal (botões, destaques)
- **lilas** — cor secundária (detalhes)
- **creme** — fundos e textos

Cada família vai do tom `50` (mais claro) ao `900` (mais escuro).
Trocando esses valores, o site inteiro muda junto.

---

## Estrutura das páginas

| Endereço     | Arquivo                      | O que tem |
| ------------ | ---------------------------- | --------- |
| `/`          | `src/app/page.tsx`           | Home: destaque, como funciona, produtos, materiais, diferenciais |
| `/catalogo`  | `src/app/catalogo/page.tsx`  | Catálogo completo com filtro por categoria |
| `/orcamento` | `src/app/orcamento/page.tsx` | Formulário de encomenda + perguntas frequentes |

Textos dessas páginas (passos, materiais, diferenciais, FAQ) ficam em listas
no começo de cada arquivo, fáceis de achar e editar.

---

## Como funciona o formulário de orçamento

Não existe servidor nem banco de dados. Ao enviar, o site **monta a mensagem
e abre o WhatsApp já preenchido** — o cliente revisa e manda.

Vantagens: custo zero de hospedagem, nada para manter, nenhuma mensagem se
perde, e a conversa já começa no lugar certo.

---

## Colocando o site no ar

A forma mais simples e gratuita é pela Vercel:

1. Crie uma conta em <https://vercel.com>
2. Suba este projeto para o GitHub
3. Na Vercel, clique em **Add New → Project** e escolha o repositório
4. Clique em **Deploy** — nenhuma configuração extra é necessária

O site sai no ar em poucos minutos. Depois é só apontar o domínio próprio
(ex.: `fabricadesonhos3d.com.br`) nas configurações do projeto.

Para conferir antes se está tudo certo:

```bash
npm run build
```

---

## Antes de divulgar — lista de conferência

- [ ] WhatsApp real configurado em `src/config/site.ts`
- [ ] E-mail, Instagram e cidade atualizados
- [ ] Produtos reais cadastrados, com preços corretos
- [ ] Fotos das peças adicionadas
- [ ] Testar os botões de WhatsApp no celular
- [ ] Revisar os textos da home e do FAQ

---

## Tecnologias

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4
