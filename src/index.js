const express = require("express");

const routes = require("./routes");

const app = express();

// Recebe o body enviado na requisição
app.use(express.json());
app.use(routes);

app.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
