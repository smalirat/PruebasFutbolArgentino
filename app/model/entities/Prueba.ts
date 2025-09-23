import { Club } from "./Club";
import { Publicacion } from "./Publicacion";
import { CategoriaFormativa } from "./CategoriaFormativa";

export class Prueba extends Publicacion {
  club?: Club;
  activa: boolean = true;
  categoria?: CategoriaFormativa;
  fechaCreacion?: Date;

  constructor(titulo?: string, contenido?: string, imagenUrl?: string, club?: Club, categoria?: CategoriaFormativa) {
    super(titulo, contenido, imagenUrl);
    if (club && categoria) {
      this.club = club;
      this.categoria = categoria;
    }
    this.fechaCreacion = new Date();
  }

  desactivar(): boolean {
    if (this.activa) {
      this.activa = false;
      return true;
    }
    return false;
  }

  setClub(club: Club): void { this.club = club; }
  setActiva(activa: boolean): void { this.activa = activa; }
  setCategoria(categoria: CategoriaFormativa): void { this.categoria = categoria; }
  setFechaCreacion(fecha: Date): void { this.fechaCreacion = fecha; }

}
