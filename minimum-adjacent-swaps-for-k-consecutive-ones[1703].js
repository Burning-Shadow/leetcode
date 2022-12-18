/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 我们将问题理想化，假设 k 即为 1 的总数，那么归根到底是移动前后的 1 位置需要一一对应，即 nums 第一个 1 对应转移后的第一个 1
 * https://leetcode.cn/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/2024387/tu-jie-zhuan-huan-cheng-zhong-wei-shu-ta-iz4v/
 */
var minMoves = function (nums, k) {
  const g = [];
  const preSum = [];
  preSum.push(0);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      g.push(i - g.length);
      preSum.push(preSum[preSum.length - 1] + g[g.length - 1]);
    }
  }
  let m = g.length, result = Number.MAX_VALUE;
  for (let i = 0; i <= m - k; i++) {
    let mid = i + Math.floor(k / 2);
    let r = g[mid];
    result = Math.min(result, (1 - k % 2) * r + (preSum[i + k] - preSum[mid + 1]) - (preSum[mid] - preSum[i]));
  }
  return result;
};






console.log(minMoves([1, 0, 0, 1, 0, 1], 2)); // 1
console.log(minMoves([1, 0, 0, 0, 0, 0, 1, 1], 3)); // 5
console.log(minMoves([1, 1, 0, 1], 2)); // 0
