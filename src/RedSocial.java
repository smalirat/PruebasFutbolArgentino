public class RedSocial {
  
  private Long id;


  private TipoRed tipo;


  private String url;

  
  private PerfilJugador perfilJugador;

  // Constructors
  public RedSocial() {}

  public RedSocial(TipoRed tipo, String url) {
    this.tipo = tipo;
    this.url = url;
  }
  
}
