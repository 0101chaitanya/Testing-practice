function capatilize(string) {
  let array = string.split('');
  let first = array[0].toUpperCase();
  array = [first, ...array.slice(1)].join('');
  return array;
}
export { capatilize };
