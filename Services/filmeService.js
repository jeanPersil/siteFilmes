import { TMBservice } from "../api/TMBclient.js";

export class FilmeService {
  constructor() {
    this.TMBservice = new TMBservice(); // ✅ Agora funciona
  }

  async getFilmesPopulares(page = 1) {
    try {
      const data = await this.TMBservice.buscarFilmesPopulares(page);
      return data;
    } catch (error) {
      console.error(`Erro ao buscar filmes populares: ${error.message}`);
    }
  }
}
