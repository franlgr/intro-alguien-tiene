const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
  console.log("Servidor iniciado en puerto 8080 ");
});