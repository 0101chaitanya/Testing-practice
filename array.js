let arrayAnalysis = (array) => {
  let obj = {};
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.avg = array.reduce((acc, v) => acc + v) / array.length;
  obj.length = array.length;
  console.log(obj);
  return obj;
};
export { arrayAnalysis };
