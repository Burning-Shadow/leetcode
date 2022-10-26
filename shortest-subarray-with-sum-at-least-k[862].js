/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 滑动窗口
 * 这种方法不太行，诸如 [84, -37, 32, 40, 95], 167 的例子就无法通过
 */
var shortestSubarray = function (nums, k) {
  let i = 0,
    j = 1,
    sum = nums[0],
    result = -1;
  const len = nums.length;

  while (i < len && j <= len) {
    if (sum >= k) {
      result = (result === -1) ? j - i : Math.min(result, j - i);
      sum -= nums[i];
      i += 1;
    } else {
      if (j === len) break;
      sum += nums[j];
      j += 1;
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 前缀和 + 单调队列
 * 计算出前缀和后由于 O(len^2) 的复杂度无法兼容下方要求，故需要用单调队列减少匹配次数
 * https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/solution/liang-zhang-tu-miao-dong-dan-diao-dui-li-9fvh/
 * 茶神的描述很详细，可以康康
 */
var shortestSubarray = function (nums, k) {
  const len = nums.length;
  const preSumArr = new Array(len + 1).fill(0); // 前缀和队列
  for (let i = 0; i < len; i++) preSumArr[i + 1] = preSumArr[i] + nums[i];

  let result = len + 1;
  const queue = [];
  for (let i = 0; i <= len; i++) {
    const curSum = preSumArr[i];
    while (queue.length != 0 && curSum - preSumArr[queue[0]] >= k) {
      result = Math.min(result, i - queue.shift());
    }
    while (queue.length != 0 && preSumArr[queue[queue.length - 1]] >= curSum) {
      queue.pop();
    }
    queue.push(i);
  }
  return result < len + 1 ? result : -1;
};




console.log(shortestSubarray([1], 1)); // 1
console.log(shortestSubarray([1, 2], 4)); // -1
console.log(shortestSubarray([2, -1, 2], 3)); // 3
console.log(shortestSubarray([48, 99, 37, 4, -31], 140)); // 2
console.log(shortestSubarray([84, -37, 32, 40, 95], 167)); // 3