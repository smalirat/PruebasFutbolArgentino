import { Pais } from "./Pais";
import { Club } from "./Club";

export class Liga {
  id?: number;
  nombre?: string;
  pais?: Pais;
  clubes: Club[] = [];

  constructor(nombre?: string, pais?: Pais) {
    if (nombre && pais) {
      this.nombre = nombre;
      this.pais = pais;
    }
  }
}