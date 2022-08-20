/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];
  for (const item of nums) {
    if (!set.has(item)) set.add(item);
    else result.push(item);
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 将元素交换至对应位置
 */
var findDuplicates = function (nums) {
  const swap = (nums, index1, index2) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    while (nums[i] != nums[nums[i] - 1]) swap(nums, i, nums[i] - 1);
  }
  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (nums[i] - 1 !== i) ans.push(nums[i]);
  }
  return ans;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 正负号标记
 */
var findDuplicates = function (nums) {
  const n = nums.length;
  const ans = [];
  for (let i = 0; i < n; ++i) {
    const x = Math.abs(nums[i]);
    if (nums[x - 1] > 0) nums[x - 1] = -nums[x - 1];
    else ans.push(x);
  }
  return ans;
}


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
console.log(findDuplicates([1, 1, 2])); // [1]
console.log(findDuplicates([1])); // []