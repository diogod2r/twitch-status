# Verificador de Live na Twitch (JS)

Este projeto é um exemplo simples de como verificar se um canal da **Twitch** está **ao vivo** utilizando apenas JavaScript e uma requisição à API GraphQL pública da plataforma.

É ideal para quem deseja:
- Criar automações
- Integrar notificações de live
- Monitorar status de streamers

---

## 🚀 Como usar

1. Copie o código abaixo:

```js
const stream = async (streamer) => {
  const clientId = "kimne78kx3ncx6brgo4mv6wki5h1ko";
  const query = `query{user(login:"${streamer}"){stream{id}}}`;
  try {
    const response = await fetch("https://gql.twitch.tv/gql", {
      method: "POST",
      headers: {
        "Client-ID": clientId
      },
      body: JSON.stringify({ query })
    });
    const data = await response.json();
    const status = data.data?.user?.stream?.id ? "online" : "offline";
    console.info(`${streamer} is ${status}`);
    return status;
  } catch (error) {
    console.error("Verification error:", error);
    return false;
  }
}
```

2. Execute com o nome de usuário da Twitch:

```js
stream("diogod2r"); // Exemplo
```

---

## 📦 Requisitos

- Ambiente com suporte a `fetch` (navegador moderno ou Node.js 18+)
- Conexão com a internet

---

## 🔧 Personalização

Você pode integrar essa função em:
- Bots de Discord
- Aplicações de frontend
- Dashboards
- Webhooks de notificação

---

## 📄 Licença

Código livre para uso e modificação. Sem dependências externas.

---

Se curtiu a ideia, ⭐ o repositório!
