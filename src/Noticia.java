public class Noticia extends Publicacion {
  private String urlFuente;

  private String autor;

  // Constructors
  public Noticia() {}

  public Noticia(String titulo, String contenido, String imagenUrl, String urlFuente, String autor) {
    super(titulo, contenido, imagenUrl);
    this.urlFuente = urlFuente;
    this.autor = autor;
  }

  // Getters y Setters
  public String getUrlFuente() { return urlFuente; }
  public void setUrlFuente(String urlFuente) { this.urlFuente = urlFuente; }

  public String getAutor() { return autor; }
  public void setAutor(String autor) { this.autor = autor; }
}
