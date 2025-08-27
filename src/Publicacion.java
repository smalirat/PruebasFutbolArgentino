public abstract class Publicacion {

  protected Long id;
  protected String titulo;

  protected String contenido;

  protected LocalDate fechaPublicacion;

  protected String imagenUrl;

  // Constructors
  public Publicacion() {
  }

  public Publicacion(String titulo, String contenido, String imagenUrl) {
    this.titulo = titulo;
    this.contenido = contenido;
    this.imagenUrl = imagenUrl;
    this.fechaPublicacion = LocalDate.now();
  }

}
