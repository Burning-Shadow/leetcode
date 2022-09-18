/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : 2 * n;
};


console.log(smallestEvenMultiple(5)); // 10
console.log(smallestEvenMultiple(6)); // 6