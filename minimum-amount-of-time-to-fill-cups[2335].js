/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
  amount.sort((a, b) => a - b);
  if (amount[2] > amount[1] + amount[0]) {
    return amount[2];
  }
  return Math.floor((amount[0] + amount[1] + amount[2] + 1) / 2);
};





console.log(fillCups([1, 4, 2])); // 4
console.log(fillCups([5, 4, 4])); // 7
console.log(fillCups([5, 0, 0])); // 5
