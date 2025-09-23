import { Info } from "./Info";

export class Club {
  id?: number;
  nombre?: string;
  ciudad?: string;
  fundacion?: number;
  logoUrl?: string;
  info?: Info;

  constructor(nombre?: string, ciudad?: string, fundacion?: number) {
    if (nombre && ciudad && fundacion) {
      this.nombre = nombre;
      this.ciudad = ciudad;
      this.fundacion = fundacion;
    }
  }
}