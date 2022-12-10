import { Terrestre } from 'src/class/Terrestre';
import { Aereo } from 'src/class/Aereo';
import { Verificador } from 'src/class/verificador';

// export const separarContenido = (obj: Array<object>): Array<clasesValidas> => {
export const separarContenido = (obj: Array<object>): Array<any> => {
  return obj.map((elemento) => {
    if (Verificador.esTerrestre(elemento)) {
      return new Terrestre(elemento as Terrestre);
    } else if (Verificador.esAereo(elemento)) {
      return new Aereo(elemento as Aereo);
    } else {
      return null;
    }
  });
};
