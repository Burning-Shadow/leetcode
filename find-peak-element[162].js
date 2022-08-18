/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 迭代爬坡
 */
var findPeakElement = function (nums) {
  const n = nums.length;
  let idx = parseInt(Math.random() * n);

  /**
   * 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])
   * 方便处理 nums[-1] 以及 nums[n] 的边界情况
  */
  const get = (nums, idx) => {
    if (idx === -1 || idx === nums.length) {
      return [0, 0];
    }
    return [1, nums[idx]];
  }

  const compare = (nums, idx1, idx2) => {
    const num1 = get(nums, idx1);
    const num2 = get(nums, idx2);
    if (num1[0] !== num2[0]) {
      return num1[0] > num2[0] ? 1 : -1;
    }
    if (num1[1] === num2[1]) {
      return 0;
    }
    return num1[1] > num2[1] ? 1 : -1;
  }

  while (!(compare(nums, idx - 1, idx) < 0 && compare(nums, idx, idx + 1) > 0)) {
    if (compare(nums, idx, idx + 1) < 0) {
      idx += 1;
    } else {
      idx -= 1;
    }
  }

  return idx;
}

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 找最大值
 */
var findPeakElement = function (nums) {
  let idx = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[idx]) idx = i;
  }
  return idx;
};


console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 1 或 5