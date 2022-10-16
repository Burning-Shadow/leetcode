/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  nums.sort((a, b) => b - a);
  const set = new Set(nums);
  for (const item of nums) {
    if (set.has(-item)) return item;
    if (item < 0) return -1;
  }
  return - 1;
};


console.log(findMaxK([-1, 2, -3, 3])); // 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])); // -1
console.log(findMaxK([648, 674, 610])); // -1