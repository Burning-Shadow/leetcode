/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  const sum = nums.reduce((a, b) => a + b, 0);
  let diff = Math.abs(goal - sum);
  if (diff === 0) return 0;
  let cnt = 0;

  while (diff > limit) {
    cnt += 1;
    diff -= limit;
  }

  return cnt + 1;
};






console.log(minElements([1, -1, 1], 3, -4)); // 2
console.log(minElements([1, -10, 9, 1], 100, 0)); // 1
console.log(minElements([1, 1, 1, 1], 1, 4)); // 0
