import { Aereo } from 'src/class/Aereo';
import { Terrestre } from 'src/class/Terrestre';
import { Vehiculo } from 'src/class/Vehiculo';
import { selectValidos } from 'src/global/tiposValidos';

export const velocidadMaximaPromedio = (
  json: Array<Vehiculo>,
  selector: selectValidos
): number => {
  if (selector == 'aereo') {
    json = json.filter((n) => n instanceof Aereo);
  } else if (selector == 'terrestre') {
    json = json.filter((n) => n instanceof Terrestre);
  }

  const velocidadesMaximas = json.map((n) => n.velocidadMaxima);
  const cantidad = velocidadesMaximas.length;
  if (cantidad > 0) {
    const sumatoria = velocidadesMaximas.reduce((n, m) => n + m);
    return Math.round((sumatoria / cantidad) * 100) / 100;
  }
  return 0;
};
