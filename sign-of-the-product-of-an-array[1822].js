/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let cnt = 0;

  for (const num of nums) {
    if (num === 0) return 0;
    if (num < 0) cnt++;
  }

  return cnt % 2 ? -1 : 1;
};


console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1
