/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const count = new Map();
  let result = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    let box = 0, x = i;
    while (x !== 0) {
      box += x % 10;
      x = Math.floor(x / 10);
    }
    count.set(box, (count.get(box) || 0) + 1);
    result = Math.max(result, count.get(box));
  }
  return result;
};




console.log(countBalls(1, 10)); // 2
console.log(countBalls(5, 15)); // 2
console.log(countBalls(19, 28)); // 2
