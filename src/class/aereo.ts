import { iAereo } from 'src/interface/iaereo';
import { Vehiculo } from './Vehiculo';

export class Aereo extends Vehiculo implements iAereo {
  alturaMaxima!: number;
  autonomia!: number;

  constructor(aereo: Aereo) {
    super(aereo); //destructring
    if (aereo !== null) {
      this.alturaMaxima = aereo.alturaMaxima;
      this.autonomia = aereo.autonomia;
    }
  }

  override toString(): string {
    return `${super.toString()}|${this.alturaMaxima}|${this.autonomia}`;
  }
}
