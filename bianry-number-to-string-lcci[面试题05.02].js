/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let substr = '0.';
  while (substr.length <= 32 && num !== 0) {
    num *= 2;
    const digit = Math.floor(num);
    substr += digit;
    num -= digit;
  }
  return substr.length <= 32 ? substr : "ERROR";
};





console.log(printBin(0.625)); // "0.101"
console.log(printBin(0.1)); // "ERROR"
