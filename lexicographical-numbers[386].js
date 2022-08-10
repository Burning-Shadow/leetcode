/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  const result = [];
  let cnt = n, number = 1;

  while (cnt) {
    result.push(number);
    if (number * 10 <= n) {
      number *= 10;
    } else {
      while (number % 10 === 9 || number + 1 > n) {
        number = Math.floor(number / 10);
      }
      number += 1;
    }
    cnt -= 1;
  }

  return result;
};

console.log(lexicalOrder(13)); // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(2)); // [1,2]