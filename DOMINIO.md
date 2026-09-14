# Configurando o domínio fabricadesonhos3d.com.br

Guia para apontar o domínio registrado no **Registro.br** para a Vercel.

---

## Passo 1 — Adicionar o domínio na Vercel

1. Acesse <https://vercel.com/jahgw1-2338s-projects/fabrica-de-sonhos-3d/settings/domains>
2. No campo de texto, digite: `fabricadesonhos3d.com.br`
3. Clique em **Add**
4. Quando perguntar sobre a versão `www`, escolha a opção recomendada
   (redirecionar `www` → domínio principal)

A Vercel vai mostrar os registros DNS que precisam ser criados. Compare com
a tabela do passo 2 — devem ser os mesmos.

---

## Passo 2 — Configurar o DNS no Registro.br

1. Entre em <https://registro.br> e faça login
2. Vá em **Meus Domínios** → clique em `fabricadesonhos3d.com.br`
3. Abra a aba **DNS** → **Editar Zona**
4. Crie os dois registros abaixo:

| Tipo    | Nome (Host) | Valor / Destino         | TTL  |
| ------- | ----------- | ----------------------- | ---- |
| `A`     | *(vazio)*   | `216.198.79.1`          | 3600 |
| `CNAME` | `www`       | `cname.vercel-dns.com.` | 3600 |

> **Atenção aos detalhes:**
> - No registro `A`, o campo **Nome** fica **em branco** (representa o
>   domínio raiz). Alguns painéis usam `@` no lugar.
> - No `CNAME`, o valor termina com **ponto final**: `cname.vercel-dns.com.`
> - Confira o IP com o que a Vercel exibiu na tela do passo 1. Se estiver
>   diferente, **use o que a Vercel mostrou** — ele tem prioridade.

5. Clique em **Salvar**

---

## Passo 3 — Aguardar a propagação

O DNS leva de **15 minutos a 24 horas** para propagar (normalmente
menos de 1 hora no Registro.br).

Na tela de domínios da Vercel, o status muda de *Invalid Configuration*
para **Valid Configuration** ✅ quando estiver tudo certo.

O certificado HTTPS é emitido automaticamente pela Vercel, sem custo e
sem configuração.

### Como verificar se já propagou

Abra o terminal e rode:

```bash
nslookup fabricadesonhos3d.com.br
```

Se responder com o IP da Vercel, está funcionando.

Ou use o site <https://dnschecker.org> e digite o domínio.

---

## Depois que o domínio estiver no ar

Atualize o e-mail de contato em `src/config/site.ts` se ele for usar o
domínio novo (ex.: `contato@fabricadesonhos3d.com.br`).

---

## Como atualizar o site daqui para frente

O projeto está ligado ao GitHub. Qualquer alteração enviada vai ao ar
sozinha:

```bash
git add -A
git commit -m "descrição da mudança"
git push
```

Em cerca de 1 minuto a Vercel publica a nova versão automaticamente.

---

## Links úteis

- **Painel do projeto:** <https://vercel.com/jahgw1-2338s-projects/fabrica-de-sonhos-3d>
- **Repositório:** <https://github.com/PauloMoreira85/fabrica-de-sonhos-3d>
- **Registro.br:** <https://registro.br>
