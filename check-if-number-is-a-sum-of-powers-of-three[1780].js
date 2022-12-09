/**
 * @param {number} n
 * @return {boolean}
 * 
 * 进制转换
 */
var checkPowersOfThree = function (n) {
  while (n) {
    if (n % 3 === 2) return false;
    n = Math.floor(n / 3);
  }
  return true;
};




console.log(checkPowersOfThree(12)); // true
console.log(checkPowersOfThree(91)); // true
console.log(checkPowersOfThree(21)); // false
