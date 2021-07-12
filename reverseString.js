function reverseString(string) {
  let array = string.split('');
  let i = 0;
  let target = [];
  for (let letter in array) {
    target[i] = array[array.length - 1 - i];
    i++;
  }
  return target.join('');
}
export { reverseString };
