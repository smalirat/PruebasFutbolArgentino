export class Pais {
  id?: number;
  nombre?: string;

  constructor(nombre?: string) {
    if (nombre) {
      this.nombre = nombre;
    }
  }


}

