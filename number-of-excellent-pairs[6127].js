/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 状态压缩，后缀和
 * https://leetcode.cn/problems/number-of-excellent-pairs/solution/deng-jie-zhuan-huan-pythonjavacgo-by-end-2qzs/
 */
var countExcellentPairs = function (nums, k) {
  const MAX = 30;
  nums = [...new Set(nums)];
  const getOneCount = (num) => {
    let result = 0;
    while (num) {
      // if (num % 2 === 1) result++;
      if (num & 1 === 1) result++;
      num >>= 1;
    }
    return result;
  }
  const cnt = new Array(MAX + 1).fill(0); // 
  for (let i = 0; i < nums.length; i++) {
    cnt[getOneCount(nums[i])]++;
  }

  let result = 0;
  for (let i = 0; i <= MAX; i++) {
    for (let j = 0; j <= MAX; j++) {
      if ((i + j) >= k) {
        result += (cnt[i] * cnt[j]);
      }
    }
  }
  return result;
};

console.log(countExcellentPairs([1, 2, 3, 1], 3)); // 5
console.log(countExcellentPairs([5, 1, 1], 10)); // 0