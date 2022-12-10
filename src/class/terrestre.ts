import { iTerrestre } from 'src/interface/iterrestre';
import { Vehiculo } from './Vehiculo';

export class Terrestre extends Vehiculo implements iTerrestre {
  cantidadPuertas!: number;
  cantidadRuedas!: number;

  constructor(terrestre: Terrestre) {
    super(terrestre); //destructring
    if (terrestre !== null) {
      this.cantidadPuertas = terrestre.cantidadPuertas;
      this.cantidadRuedas = terrestre.cantidadRuedas;
    }
  }

  override toString(): string {
    return `${super.toString()}|${this.cantidadPuertas}|${this.cantidadRuedas}`;
  }
}
