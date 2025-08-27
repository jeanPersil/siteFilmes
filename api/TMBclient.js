import { Filme } from "../models/filme.js";

export class TMBservice {
  constructor(apiKey = "0eca199548461a2a5e197e56d9d95f39", language = "pt-BR") {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.themoviedb.org/3";
    this.language = language;
  }

  async buscarFilmesPopulares(pagina = 1) {
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
}
