// Importa o módulo http
const http = require("http");

// Cria o servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá, mundo! Servidor Node.js rodando 🚀");
});

// Define a porta
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
