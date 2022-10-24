/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 一次遍历，迭代变量
 */
var partitionDisjoint = function (nums) {
  const len = nums.length;
  let leftMax = nums[0],
    leftPos = 0,
    curMax = nums[0];

  for (let i = 1; i < len - 1; i++) {
    curMax = Math.max(curMax, nums[i]);
    if (nums[i] < leftMax) {
      leftMax = curMax;
      leftPos = i;
    }
  }

  return leftPos + 1;
};


console.log(partitionDisjoint([5, 0, 3, 8, 6])); // 3
console.log(partitionDisjoint([1, 1, 1, 0, 6, 12])); // 4
