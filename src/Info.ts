import { CategoriaFormativa } from "./CategoriaFormativa";

export class Info {
  id?: number;
  titulo?: string;
  descripcion?: string;
  valor?: string;
  categoria?: CategoriaFormativa;

  constructor(titulo?: string, descripcion?: string, valor?: string, categoria?: CategoriaFormativa) {
    if (titulo && descripcion && valor && categoria) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.valor = valor;
      this.categoria = categoria;
    }
  }

}

