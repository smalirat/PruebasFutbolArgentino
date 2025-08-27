@Component
public class PruebaBuilder {
  private Prueba borrador;
  private String titulo;
  private String contenido;
  private String imagenUrl;
  private Club club;
  private CategoriaFormativa categoria;

  public PruebaBuilder() {
    this.borrador = new Prueba();
  }

  public PruebaBuilder agregarTitulo(String titulo) {
    this.titulo = titulo;
    return this;
  }

  public PruebaBuilder agregarContenido(String contenido) {
    this.contenido = contenido;
    return this;
  }

  public PruebaBuilder agregarImagenUrl(String imagenUrl) {
    this.imagenUrl = imagenUrl;
    return this;
  }

  public PruebaBuilder agregarClub(Club club) {
    this.club = club;
    return this;
  }

  public PruebaBuilder agregarCategoria(CategoriaFormativa categoria) {
    this.categoria = categoria;
    return this;
  }

  public Prueba construirBorrador() {
    borrador.setTitulo(titulo);
    borrador.setContenido(contenido);
    borrador.setImagenUrl(imagenUrl);
    borrador.setClub(club);
    borrador.setCategoria(categoria);

    return borrador;
  }
}
