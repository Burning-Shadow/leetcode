/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * 单调队列
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length;
  const queue = [];

  // 循环推送入队列，保证排序从大到小的顺序
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop();
    queue.push(i);
  }

  const result = [nums[queue[0]]];
  for (let i = k; i < n; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) queue.pop();
    queue.push(i);
    while (queue[0] <= i - k) queue.shift();
    result.push(nums[queue[0]]);
  }
  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([1, -1], 1)); // [1, -1]