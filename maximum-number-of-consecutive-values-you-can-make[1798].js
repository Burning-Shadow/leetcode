/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  let result = 1;
  coins.sort((a, b) => a - b);
  for (const i of coins) {
    if (i > result) {
      break;
    }
    result += i;
  }
  return result;
};





console.log(getMaximumConsecutive([1, 3])); // 2
console.log(getMaximumConsecutive([1, 1, 1, 4])); // 8
console.log(getMaximumConsecutive([1, 4, 10, 3, 1])); // 20
