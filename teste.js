import { FilmeController } from "./Controller/FilmeController.js";
import { TMBservice } from "./api/TMBclient.js";

var filmecontrooler = new FilmeController();
var tmbservice = new TMBservice();

async function testetmb(pagina) {
  let filmes = await tmbservice.buscarFilmesEmCartaz(pagina);
  console.log("filmes em cartaz");
  console.log(filmes);
}


testetmb(1);
