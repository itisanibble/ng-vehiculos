import { Vehiculo } from 'src/class/Vehiculo';
import {
  formValidos,
  operacionValidas,
  nuevoValidos,
} from 'src/global/tiposValidos';

export interface iEstado {
  form: formValidos;
  operacion: operacionValidas;
  vehiculo: any;
  tipo: nuevoValidos;
  id: number | null;
}
