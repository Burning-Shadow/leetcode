/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = [];
  while (columnNumber > 0) {
    const a0 = (columnNumber - 1) % 26 + 1;
    ans.push(String.fromCharCode(a0 - 1 + 'A'.charCodeAt()));
    columnNumber = Math.floor((columnNumber - a0) / 26);
  }
  ans.reverse();
  return ans.join('');
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(2147483647)); // FXSHRXW