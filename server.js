const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

// serve os arquivos gerados pelo Vite
app.use(express.static(distPath));

// fallback para SPA (React Router)
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
