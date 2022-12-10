export const encontrarMaximo = (json: Array<any>): number =>
  Math.max(...json.map((x) => parseInt(x.id)));
