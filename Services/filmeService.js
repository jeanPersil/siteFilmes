import { TMBservice } from "../api/TMBclient.js";

export class FilmeService {
  constructor() {
    this.TMBservice = new TMBservice();
  }
  async getFilmesPopulares(page = 1) {
    try {
      const data = await this.TMBservice.buscarFilmesPopulares(page);
      return data;
    } catch (error) {
      console.error(`Erro ao buscar filmes populares: ${error.message}`);
    }
  }

  async getFilmesBemAvaliados(page = 1) {
    try {
      const data = await this.TMBservice.buscarFilmesBemAvaliados(page);
      return data;
    } catch (error) {
      console.error(`Erro ao buscar filmes bem avaliados: ${error.message}`);
    }
  }

  async getFilmesEmCartaz(page = 1) {
    try {
      const data = await this.TMBservice.buscarFilmesEmCartaz(page);
      return data;
    } catch (error) {
      console.error(`Erro ao buscar filmes em: ${error.message}`);
    }
  }
}
