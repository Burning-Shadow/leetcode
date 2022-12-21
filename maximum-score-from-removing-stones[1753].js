/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 * 
 * 数学方法【贪心】
 * 
 * 我们不妨设 a <= b <= c
 * 1. a + b <= c 时答案为 a + b
 * 2. a + b > c 时最后剩余的 a 和 b 差值不超过 1，随后二者两两配对即可
 *   假设 a 与 c 配对了 k1 次，b 与 c 配对了 k2 次，且 k1 + k2 = c
 *   故答案 k1 + k2 + ⌊((a - k1) + (b - k2)) / 2⌋，简化得 ⌊(a + b + c) / 2⌋
 */
var maximumScore = function (a, b, c) {
  const sum = a + b + c;
  const maxVal = Math.max(Math.max(a, b), c);
  return Math.min(sum - maxVal, Math.floor(sum / 2));
};





console.log(maximumScore(2, 4, 6)); // 6
console.log(maximumScore(4, 4, 6)); // 7
console.log(maximumScore(1, 8, 8)); // 8
