import { PerfilJugador } from "./PerfilJugador";

export class Usuario {
  id?: number;
  nombre?: string;
  email?: string;
  telefono?: string;
  passwordHash?: string;
  perfil?: PerfilJugador;

  constructor(nombre?: string, email?: string, telefono?: string, passwordHash?: string) {
    if (nombre && email && telefono && passwordHash) {
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
      this.passwordHash = passwordHash;
    }
  }

}