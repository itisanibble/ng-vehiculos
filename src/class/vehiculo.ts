import { iVehiculo } from 'src/interface/ivehiculo';

export class Vehiculo implements iVehiculo {
  id: number = 0;
  modelo: string = '';
  anoFabricacion: number = 0;
  velocidadMaxima: number = 0;

  constructor(vehicle: iVehiculo) {
    if (vehicle !== null) {
      this.id = vehicle.id;
      this.modelo = vehicle.modelo;
      this.anoFabricacion = vehicle.anoFabricacion;
      this.velocidadMaxima = vehicle.velocidadMaxima;
    }
  }

  toString(): string {
    return `${this.id}|${this.modelo}|${this.anoFabricacion}|${this.velocidadMaxima}`;
  }
}
