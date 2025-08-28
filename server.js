import express from "express";
import { FilmeController } from "./Controller/FilmeController.js";

const app = express();
const filmeController = new FilmeController();

app.get("/api/filmes/populares", (req, res) => {
  filmeController.getFilmesPopulares(req, res);
});

app.get("/api/filmes/bemAvaliados", (req, res) => {
  filmeController.getFilmesBemAvaliados(req, res);
});

app.get("/api/filmes/emCartaz", async (req, res) => {
  filmeController.getFilmesEmCartaz(req, res);
  console.log("filmes recentes");
});

app.listen(3000, () => {
  console.log("Backend rodando na porta 3000");
  console.log("Teste em: http://localhost:3000/api/filmes/populares");
  console.log("Use Ctrl+C para parar o servidor");
});
