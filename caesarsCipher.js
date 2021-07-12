const caesarCipher = (str, shift) => {
  if (shift === 0) return str;
  return String.fromCharCode(
    ...str.split('').map((char) => {
      if (char.match(/[A-Z]/)) {
        console.log(char);
        return ((char.charCodeAt() - 65 + shift) % 26) + 65;
      } else if (char.match(/[a-z]/)) {
        console.log(char);
        return ((char.charCodeAt() - 97 + shift) % 26) + 97;
      }
      return char.charCodeAt();
    })
  );
};
//caesarCipher('Genius without education is like silver in the mine', 3);
export { caesarCipher };
