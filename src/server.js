const express = require("express");  // essa função chama o Express e a const captura o Express
const server = express();  // função express sendo atribuida na const server 
const routes = require("./routes");
const path = require("path");

server.set('view engine', 'ejs');  // setando uma configuração (motor de visualização) do ejs

// mudar a localização da pasta views || path.join server para juntar o caminho __dirname com views
server.set('views', path.join(__dirname, 'views'));

// função para habilitar os arquivos statics (use é para habilitar configurações no servidor)
server.use(express.static("public"));

// usar o req.body (habilitando no express que o conteúdo do body seja lido)
server.use(express.urlencoded({extended: true}));

// routes
server.use(routes);
// função listen é para escutar o servidor - argumento é a porta de escuta (3000) e uma função (arrow function) avisando que está rodando
server.listen(3000, () => console.log('rodando'));