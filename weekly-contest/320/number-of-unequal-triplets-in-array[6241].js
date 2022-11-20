/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 对于任意 nums[i]，假设有:
 *  小于 nums[i] 的数 a 个
 *  等于 nums[i] 的数 b 个
 *  大于 nums[i] 的数 c 个
 * 
 * 则 x 对答案的贡献为 a * b * c
 */
var unequalTriplets = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  
  let result = 0, start = 0;
  for (let i = 0; i < len - 1; i++) {
    const curr = nums[i];
    if (curr !== nums[i + 1]) {
      result += start * (i - start + 1) * (len - i - 1);
      start = i + 1;
    }
  }

  return result;
};


console.log(unequalTriplets([4, 4, 2, 4, 3])); // 3
console.log(unequalTriplets([1, 1, 1, 1, 1])); // 0
