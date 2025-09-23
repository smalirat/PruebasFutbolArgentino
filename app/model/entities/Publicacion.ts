
export abstract class Publicacion {
  protected id?: number;
  protected titulo?: string;
  protected contenido?: string;
  protected fechaPublicacion?: Date;
  protected imagenUrl?: string;

  constructor(titulo?: string, contenido?: string, imagenUrl?: string) {
    if (titulo && contenido && imagenUrl) {
      this.titulo = titulo;
      this.contenido = contenido;
      this.imagenUrl = imagenUrl;
      this.fechaPublicacion = new Date();
    }
  }

  // Getters y setters
  getId(): number | undefined { return this.id; }
  setId(id: number): void { this.id = id; }

  getTitulo(): string | undefined { return this.titulo; }
  setTitulo(titulo: string): void { this.titulo = titulo; }

  getContenido(): string | undefined { return this.contenido; }
  setContenido(contenido: string): void { this.contenido = contenido; }

  getFechaPublicacion(): Date | undefined { return this.fechaPublicacion; }
  setFechaPublicacion(fecha: Date): void { this.fechaPublicacion = fecha; }

  getImagenUrl(): string | undefined { return this.imagenUrl; }
  setImagenUrl(url: string): void { this.imagenUrl = url; }
}

