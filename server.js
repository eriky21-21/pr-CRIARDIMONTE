const express = require("express")
const path = require("path")

const app = express()
const port = process.env.PORT || 3000

// servir arquivos estáticos do Vite (dist)
app.use(express.static(path.join(__dirname, "dist")))

// rota fallback para SPA (React Router)
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
})

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`)
})
