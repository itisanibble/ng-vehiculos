import { Aereo } from 'src/class/Aereo';
import { Terrestre } from 'src/class/Terrestre';

export type clasesValidas = Terrestre | Aereo;
export type nuevoValidos = 'terrestre' | 'aereo';
export type selectValidos = 'todos' | nuevoValidos;
export type operacionValidas =
  | 'alta'
  | 'modificar-eliminar'
  | 'creado'
  | 'eliminado'
  | 'modificado'
  | 'cancelado'
  | null;
export type formValidos = 'listado' | 'abm';
