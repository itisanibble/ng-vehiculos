export interface iVehiculo {
  id: number;
  modelo: string;
  anoFabricacion: number;
  velocidadMaxima: number;
  toString(): string;
}
