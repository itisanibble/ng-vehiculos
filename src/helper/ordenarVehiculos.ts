export const ordenarVehiculos = (json: Array<any>, atributo: string) => {
  return json.sort((n, m): any => {
    if (n[atributo] == null) {
      return 1;
    } else if (m[atributo] == null) {
      return -1;
    } else if (n[atributo] < m[atributo]) {
      return -1;
    } else if (n[atributo] > m[atributo]) {
      return 1;
    } else if (n[atributo] == m[atributo]) {
      return 0;
    }
  });
};
