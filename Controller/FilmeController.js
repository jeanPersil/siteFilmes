import { FilmeService } from "../Services/filmeService.js";

export class FilmeController {
  constructor() {
    this.filmeService = new FilmeService();
  }
  async getFilmesPopulares(req, res) {
    const pagina = req.query.page || 1;

    const filmes = await this.filmeService.getFilmesPopulares(pagina);

    res.json(filmes);
  }
}
