public class PerfilJugadorBuilder {
  private PerfilJugador borrador;
  private LocalDate fechaNacimiento;
  private String nacionalidad;
  private Float altura;
  private Float peso;
  private String pieDominante;
  private String posicion;
  private List<RedSocial> redesSociales;

  public PerfilJugadorBuilder() {
    this.redesSociales = new ArrayList<>();
    this.borrador = new PerfilJugador();
  }

  public PerfilJugadorBuilder agregarFechaNacimiento(LocalDate fecha) {
    this.fechaNacimiento = fecha;
    return this;
  }

  public PerfilJugadorBuilder agregarNacionalidad(String nacionalidad) {
    this.nacionalidad = nacionalidad;
    return this;
  }

  public PerfilJugadorBuilder agregarAltura(Float altura) {
    this.altura = altura;
    return this;
  }

  public PerfilJugadorBuilder agregarPeso(Float peso) {
    this.peso = peso;
    return this;
  }

  public PerfilJugadorBuilder agregarPieDominante(String pie) {
    this.pieDominante = pie;
    return this;
  }

  public PerfilJugadorBuilder agregarPosicion(String posicion) {
    this.posicion = posicion;
    return this;
  }

  public PerfilJugadorBuilder agregarRedSocial(RedSocial red) {
    this.redesSociales.add(red);
    return this;
  }

  public PerfilJugador construirBorrador() {
    borrador.setFechaNacimiento(fechaNacimiento);
    borrador.setNacionalidad(nacionalidad);
    borrador.setAltura(altura);
    borrador.setPeso(peso);
    borrador.setPieDominante(pieDominante);
    borrador.setPosicion(posicion);

    for (RedSocial red : redesSociales) {
      borrador.agregarRedSocial(red);
    }

    return borrador;
  }
}
