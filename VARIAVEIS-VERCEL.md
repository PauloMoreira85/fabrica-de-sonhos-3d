# Variáveis de ambiente na Vercel

O site agora lê os produtos do banco (Supabase), então precisa saber
o endereço e a chave pública dele.

Essas informações ficam no arquivo `.env.local`, que **não vai para o
GitHub** por segurança — por isso precisam ser cadastradas também na
Vercel, uma única vez.

---

## Passo a passo

1. Acesse
   <https://vercel.com/jahgw1-2338s-projects/fabrica-de-sonhos-3d/settings/environment-variables>

2. Adicione as duas variáveis abaixo, marcando **Production**,
   **Preview** e **Development** em cada uma:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xdczbnvyowvkvemvlftm.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `sb_publishable_PTsw4UOl0US7-WrF3iSKuA_5pzrAJ0L` |

3. Vá em **Deployments**, abra o último e clique em **Redeploy**.

Pronto — a partir daí todo deploy funciona sozinho.

---

## Essa chave pode ficar exposta?

Sim. É a chave **pública** (publishable), feita para rodar no navegador.

A proteção real está nas regras do banco (RLS), que permitem a ela
**apenas ler produtos e seções publicados**. Foi testado:

- ✅ Ler produtos publicados — permitido
- ❌ Ler clientes — bloqueado
- ❌ Ler pedidos, custos e filamentos — bloqueado
- ❌ Gravar ou alterar qualquer coisa — bloqueado

A chave `service_role` (essa sim secreta) **não é usada no site** e não
deve ser colocada aqui em hipótese alguma.

---

## Se o build falhar de novo

O erro aparece como:

```
Error: supabaseUrl is required.
```

Significa que as variáveis não foram salvas ou não foram marcadas para
o ambiente **Production**. Confira no mesmo endereço acima.

Enquanto um build falha, o site **continua no ar** com a última versão
que deu certo — nada sai do ar.
