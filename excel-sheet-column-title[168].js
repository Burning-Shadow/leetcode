/**
 * @param {number} columnNumber
 * @return {string}
 * 
 * 整除取余
 */
var convertToTitle = function (columnNumber) {
  let subString = [];
  while (columnNumber > 0) {
    const a0 = (columnNumber - 1) % 26 + 1;
    subString.push(String.fromCharCode(a0 - 1 + 'A'.charCodeAt()));
    columnNumber = Math.floor((columnNumber - a0) / 26);
  }
  subString.reverse();
  return subString.join('');
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(2147483647)); // FXSHRXW