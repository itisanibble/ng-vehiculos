export class Verificador {
  static esVehiculo(obj: object): boolean {
    return (
      obj.hasOwnProperty('id') &&
      obj.hasOwnProperty('modelo') &&
      obj.hasOwnProperty('anoFabricacion') &&
      obj.hasOwnProperty('velocidadMaxima')
    );
  }
  static esTerrestre(obj: object): boolean {
    return (
      Verificador.esVehiculo(obj) &&
      obj.hasOwnProperty('cantidadPuertas') &&
      obj.hasOwnProperty('cantidadRuedas')
    );
  }
  static esAereo(obj: object): boolean {
    return (
      Verificador.esVehiculo(obj) &&
      obj.hasOwnProperty('alturaMaxima') &&
      obj.hasOwnProperty('autonomia')
    );
  }
}
