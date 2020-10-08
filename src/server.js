const express = require("express")
const server = express()

//config pasta publica
server.use(express.static("public"))

//utilizando template engine
const nunjucks =  require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
//configurar caminho
//pagina inicial
// req: resquisição
// res: resposta
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)