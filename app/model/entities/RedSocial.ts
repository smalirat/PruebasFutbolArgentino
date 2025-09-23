import { TipoRed } from "./TipoRed";
import { PerfilJugador } from "./PerfilJugador";

export class RedSocial {
  id?: number;
  tipo?: TipoRed;
  url?: string;
  perfilJugador?: PerfilJugador;

  constructor(tipo?: TipoRed, url?: string) {
    if (tipo && url) {
      this.tipo = tipo;
      this.url = url;
    }
  }

  setPerfilJugador(perfil: PerfilJugador){
    this.perfilJugador = perfil;
  }

  getTipoRed(){
    return this.tipo;
  }

}