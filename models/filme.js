export class Filme {
  constructor(
    id,
    titulo,
    tituloOriginal,
    sinopse,
    poster,
    backdrop,
    dataLancamento,
    nota,
    votos,
    popularidade,
    idiomaOriginal
  ) {
    this.id = id;
    this.titulo = titulo;
    this.tituloOriginal = tituloOriginal;
    this.sinopse = sinopse;
    this.poster = poster;
    this.backdrop = backdrop;
    this.dataLancamento = dataLancamento;
    this.nota = nota;
    this.votos = votos;
    this.popularidade = popularidade;
    this.idiomaOriginal = idiomaOriginal;
  }

  static fromJson(json) {
    return new Filme(
      json.id,
      json.title,
      json.original_title,
      json.overview,
      json.poster_path,
      json.backdrop_path,
      json.release_date,
      json.vote_average,
      json.vote_count,
      json.popularity,
      json.original_language
    );
  }
}
