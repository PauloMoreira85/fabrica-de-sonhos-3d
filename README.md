# Fábrica de Sonhos 3D

Site institucional e catálogo de peças em impressão 3D, com contato via
WhatsApp.

🌐 **No ar:** <https://fabricadesonhos3d.com.br>

---

## ⚠️ Primeiro passo: colocar o WhatsApp de verdade

O site inteiro leva o cliente para o WhatsApp, então **esse é o ajuste
mais importante**. Sem ele, nenhum botão funciona.

Abra `src/config/site.ts` e troque a linha do `whatsapp`:

```ts
whatsapp: "5500000000000",   // ← troque por: 55 + DDD + número
```

O número vai **sem espaço, sem traço e sem parênteses**, começando
com `55` (código do Brasil).

| Número real      | Como escrever    |
| ---------------- | ---------------- |
| (31) 98888-7777  | `5531988887777`  |
| (11) 97777-6666  | `5511977776666`  |

No mesmo arquivo também dá para mudar e-mail, Instagram, cidade e prazo.

---

## Como cadastrar produtos

**Os produtos NÃO ficam neste projeto.** Eles vêm do banco de dados,
cadastrados pelo **PDV** (projeto `Fábrica de Sonhos PDV`).

No PDV:

- **Produtos** → cadastra a peça, preço, foto, estoque e a seção
  - marque **"Mostrar no site"** para ela aparecer no catálogo
  - marque **"Destacar na página inicial"** para ela entrar na vitrine da home
- **Seções** → cria os grupos (Luminárias, Decoração, Presentes…),
  que viram os filtros do catálogo

O site atualiza sozinho em até **5 minutos**. Não precisa mexer em
código nem publicar de novo.

### Fotos dos produtos

No campo "Link da foto", cole o endereço de uma imagem já hospedada
(Google Drive com link público, Imgur, Instagram etc.).

Dicas: use imagens **quadradas** (ex.: 800 × 800) e comprima em
<https://squoosh.app> para o site carregar rápido. Produto sem foto
mostra um espaço reservado elegante — o site não quebra.

---

## Rodando o site no seu computador

Primeira vez:

```bash
npm install
```

Sempre que quiser ver o site:

```bash
npm run dev
```

Abra http://localhost:3000. Para parar, aperte `Ctrl + C`.

---

## Páginas

| Endereço | Arquivo | O que tem |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Destaque, como comprar, peças em destaque, materiais, diferenciais |
| `/catalogo` | `src/app/catalogo/page.tsx` | Catálogo completo, com filtro por seção |

Os textos fixos (passos, materiais, diferenciais) ficam em listas no
começo de cada arquivo, fáceis de achar e editar.

---

## Mudando as cores

As cores estão no topo de `src/app/globals.css`, em três famílias:

- **coral** — cor principal (botões, destaques)
- **lilas** — cor secundária (detalhes)
- **creme** — fundos e textos

Cada família vai do tom `50` (mais claro) ao `900` (mais escuro).
Trocando esses valores, o site inteiro muda junto.

---

## Publicando alterações

O projeto está ligado ao GitHub e à Vercel. Qualquer alteração enviada
vai ao ar sozinha em cerca de 1 minuto:

```bash
git add -A
git commit -m "descrição da mudança"
git push
```

Para conferir antes se está tudo certo:

```bash
npm run build
```

---

## Segurança

O site usa a chave **pública** do Supabase, e as regras do banco
permitem a ela apenas **ler produtos e seções publicados**. Pedidos,
clientes, custos e estoque ficam inacessíveis pelo site — só pelo PDV,
com login.

---

## Tecnologias

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Supabase
