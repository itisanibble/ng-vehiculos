export const encontrarId = (json: Array<any>, id: number) => {
  for (let i = 0; i < json.length; i++) {
    if (json[i].id == id) {
      return i;
    }
  }
  return -1;
};
