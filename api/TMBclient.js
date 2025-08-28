import { Filme } from "../models/filme.js";

export class TMBservice {
  constructor(language = "pt-BR") {
    this.apiKey = "0eca199548461a2a5e197e56d9d95f39";
    this.baseUrl = "https://api.themoviedb.org/3";
    this.language = language;
  }

  async buscarFilmesPopulares(pagina) {
    try {
      const response = await fetch(
        `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${pagina}`
      );

      const data = await response.json();

      return data.results.map((filme) => Filme.fromJson(filme));
    } catch (error) {
      console.error(`Erro ao buscar filmes populares: ${error.message}`);
    }
  }

  async buscarFilmesBemAvaliados(pagina) {
    try {
      const response = await fetch(
        `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=${this.language}&page=${pagina}`
      );

      const data = await response.json();

      return data.results.map((filme) => Filme.fromJson(filme));
    } catch (error) {
      console.error(`Erro ao buscar filmes bem avaliados: ${error.message}`);
    }
  }

  async buscarFilmesEmCartaz(pagina) {
    try {
      const response = await fetch(
        `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${pagina}`
      );

      const data = await response.json();

      return data.results.map((filme) => Filme.fromJson(filme));
    } catch (error) {
      console.error(`error ao buscar filmes em cartaz: ${error.message}`);
    }
  }
}
