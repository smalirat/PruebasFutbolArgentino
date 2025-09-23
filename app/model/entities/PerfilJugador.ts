import { TipoRed } from "./TipoRed";
import { RedSocial } from "./RedSocial";
import { CategoriaFormativa } from "./CategoriaFormativa";
import { differenceInYears } from "date-fns";
import { EstadoBorrador } from "./EstadoBorrador";


export class PerfilJugador {
  id?: number;
  fechaNacimiento?: Date;
  nacionalidad?: string;
  altura?: number;
  peso?: number;
  pieDominante?: string;
  posicion?: string;
  private redesSociales: RedSocial[] = [];
  estado: EstadoBorrador = EstadoBorrador.BORRADOR;

  agregarRedSocial(red: RedSocial): void {
    red.setPerfilJugador(this);
    this.redesSociales.push(red);
  }

  eliminarRedSocial(tipo: TipoRed): void {
    this.redesSociales = this.redesSociales.filter(red => red.getTipoRed() !== tipo);
  }

  calcularEdad(): number | undefined {
    if (!this.fechaNacimiento) return undefined;
    return differenceInYears(new Date(), this.fechaNacimiento);
  }

  calcularCategoria(): CategoriaFormativa | undefined {
    const edad = this.calcularEdad();
    if (edad === undefined) return undefined;

    if (edad <= 8) return CategoriaFormativa.OCTAVA;
    if (edad <= 9) return CategoriaFormativa.SEPTIMA;
    if (edad <= 10) return CategoriaFormativa.SEXTA;
    if (edad <= 11) return CategoriaFormativa.QUINTA;
    if (edad <= 12) return CategoriaFormativa.CUARTA;

    return CategoriaFormativa.PRIMERA;
  }

  getRedesSociales(): ReadonlyArray<RedSocial> {
    return this.redesSociales;
  }

  setRedesSociales(redes: RedSocial[]): void {
    this.redesSociales = redes;
  }

  finalizarPerfil(): void {
    this.estado = EstadoBorrador.COMPLETO;;
  }

}
