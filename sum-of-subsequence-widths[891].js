/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 1. 若通过双指针求出所有序列，那么 O(n^2) 的复杂度必定无法满足 nums.length <= 10^5 要求
 * 2. 另一种方法，dp求和的形式亦无法通过，原因是对于内存空间的申请同样是 O(n^2) 的量级
 * 
 * 故只能用数学方法
 *  https://leetcode.cn/problems/sum-of-subsequence-widths/solutions/1976655/zi-xu-lie-kuan-du-zhi-he-by-leetcode-sol-649q/
 */
var sumSubseqWidths = function (nums) {
  const MOD = 1000000007;
  nums.sort((a, b) => a - b);
  let res = 0;
  let x = nums[0], y = 2;
  for (let j = 1; j < nums.length; j++) {
    res = (res + nums[j] * (y - 1) - x) % MOD;
    x = (x * 2 + nums[j]) % MOD;
    y = y * 2 % MOD;
  }
  return (res + MOD) % MOD;
};



console.log(sumSubseqWidths([2, 1, 3])); // 6
console.log(sumSubseqWidths([2])); // 0
