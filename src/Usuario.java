
public class Usuario {
  private PerfilJugador perfil;

  // Constructors
  public Usuario() {
  }

  public Usuario(String nombre, String email, String telefono, String passwordHash) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.passwordHash = passwordHash;
  }

}
