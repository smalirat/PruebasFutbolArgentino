import { Publicacion } from "./Publicacion";

export class Noticia extends Publicacion {
  urlFuente?: string;
  autor?: string;

  constructor(titulo?: string, contenido?: string, imagenUrl?: string, urlFuente?: string, autor?: string) {
    super(titulo, contenido, imagenUrl);
    if (urlFuente && autor) {
      this.urlFuente = urlFuente;
      this.autor = autor;
    }
  }


}