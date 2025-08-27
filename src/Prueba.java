public class Prueba extends Publicacion {

  private Club club;

  private Boolean activa = true;


  private CategoriaFormativa categoria;


  private LocalDate fechaCreacion;

  // Constructors
  public Prueba() {
    this.fechaCreacion = LocalDate.now();
  }

  public Prueba(String titulo, String contenido, String imagenUrl, Club club, CategoriaFormativa categoria) {
    super(titulo, contenido, imagenUrl);
    this.club = club;
    this.categoria = categoria;
    this.fechaCreacion = LocalDate.now();
  }

  public boolean desactivar() {
    if (activa) {
      this.activa = false;
      return true;
    }
    return false;
  }

}
