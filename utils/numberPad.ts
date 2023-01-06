export const numberPad = (n: number, width: number) => {
  const v = n + '';
  return v.length >= width ? n : new Array(width - v.length + 1).join('0') + v;
};
