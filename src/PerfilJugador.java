public class PerfilJugador {

  // Constructors
  public PerfilJugador() {
  }

  // Métodos del diagrama
  public void agregarRedSocial(RedSocial red) {
    red.setPerfilJugador(this);
    this.redesSociales.add(red);
  }

  public void eliminarRedSocial(TipoRed tipo) {
    this.redesSociales.removeIf(red -> red.getTipo().equals(tipo));
  }

  public int calcularEdad() {
    if (fechaNacimiento == null) return 0;
    return Period.between(fechaNacimiento, LocalDate.now()).getYears();
  }

  public CategoriaFormativa calcularCategoria() {
    int edad = calcularEdad();
    if (edad <= 8) return CategoriaFormativa.OCTAVA;
    if (edad <= 9) return CategoriaFormativa.SEPTIMA;
    if (edad <= 10) return CategoriaFormativa.SEXTA;
    if (edad <= 11) return CategoriaFormativa.QUINTA;
    if (edad <= 12) return CategoriaFormativa.CUARTA;
    return CategoriaFormativa.PRIMERA;
  }

}
