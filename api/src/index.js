const express = require("express");
require("express-async-errors");

const routes = require("./routes");

const app = express();

// Recebe o body enviado na requisição
app.use(express.json());
app.use(routes);
// Error Handler do Express
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () =>
  console.log("🔥 Server started at http://localhost:3000")
);
