/**
 * @param {number[]} nums
 * @return {number}
 * 
 * dfs
 */
var minMaxGame = function (nums) {
  const n = nums.length;
  if (n === 1) {
    return nums[0];
  }
  const newNums = new Array(Math.floor(n / 2)).fill(0);
  for (let i = 0; i < newNums.length; i++) {
    if (i % 2 === 0) {
      newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
    } else {
      newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
    }
  }
  return minMaxGame(newNums);
};


/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 模拟
 */
var minMaxGame = function (nums) {
  let n = nums.length;
  while (n !== 1) {
    const newNums = new Array(Math.floor(n / 2)).fill(0);
    for (let i = 0; i < newNums.length; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    nums = newNums;
    n = Math.floor(n / 2);
  }
  return nums[0];
};


/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 原地修改
 */
var minMaxGame = function (nums) {
  let n = nums.length;
  while (n !== 1) {
    const m = Math.floor(n / 2);
    for (let i = 0; i < m; i++) {
      if (i % 2 === 0) {
        nums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      } else {
        nums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    n = m;
  }
  return nums[0];
};








console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2])); // 1
console.log(minMaxGame([3])); // 3
