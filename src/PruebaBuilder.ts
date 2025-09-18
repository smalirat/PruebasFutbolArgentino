import { CategoriaFormativa } from "./CategoriaFormativa";
import { Club } from "./Club";
import { Prueba } from "./Prueba";


export class PruebaBuilder {
  private borrador: Prueba;
  private titulo?: string;
  private contenido?: string;
  private imagenUrl?: string;
  private club?: Club;
  private categoria?: CategoriaFormativa;

  constructor() {
    this.borrador = new Prueba();
  }

  agregarTitulo(titulo: string): PruebaBuilder {
    this.titulo = titulo;
    return this;
  }

  agregarContenido(contenido: string): PruebaBuilder {
    this.contenido = contenido;
    return this;
  }

  agregarImagenUrl(imagenUrl: string): PruebaBuilder {
    this.imagenUrl = imagenUrl;
    return this;
  }

  agregarClub(club: Club): PruebaBuilder {
    this.club = club;
    return this;
  }

  agregarCategoria(categoria: CategoriaFormativa): PruebaBuilder {
    this.categoria = categoria;
    return this;
  }

  construirBorrador(): Prueba {
    this.borrador.setTitulo(this.titulo!);
    this.borrador.setContenido(this.contenido!);
    this.borrador.setImagenUrl(this.imagenUrl!);
    this.borrador.setClub(this.club!);
    this.borrador.setCategoria(this.categoria!);

    return this.borrador;
  }
}
