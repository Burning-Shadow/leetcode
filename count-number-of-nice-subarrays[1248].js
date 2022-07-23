/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 双指针
 */
var numberOfSubarrays = function (nums, k) {
  const len = nums.length;
  if (nums.filter(_ => _ & 1).length < k) return 0;

  let cnt = 0, left = 0, right = 0, oddCnt = 0;
  while (right < len) {
    if (nums[right] & 1) oddCnt += 1;
    while (oddCnt === k) {
      let idx = right + 1;
      while (!(nums[idx] & 1) && idx < len) idx += 1;
      // idx 为满足 oddCnt === k 的最小子串之后第一个奇数的下标
      cnt += (idx - right);
      if (nums[left] & 1) oddCnt -= 1;
      left += 1;
    }
    right += 1;
  }

  return cnt;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 前缀和 + 差分
 * 
 * 1. 计算前缀和数组 arr：遍历原数组，每遍历一个元素，计算当前的前缀和（即到当前元素为止，数组中有多少个奇数）
 * 2. 对上述前缀和数组，双重循环统计 arr[j] - arr[i] == k 的个数，这样做是 O(N^2)的（这里会超时哦）
 * 3. 优化：因此，我们可以像「1. 两数之和」那样使用 HashMap 优化到 O(N)，键是「前缀和」，值是「前缀和的个数」（下面代码中具体使用的是 int[] prefixCnt 数组，下标是「前缀和」，值是「前缀和的个数」），因此我们可以遍历原数组，每遍历到一个元素，计算当前的前缀和 sum，就在 res 中累加上前缀和为 sum - k 的个数。
 */
var numberOfSubarrays = function (nums, k) {
  const len = nums.length;
  const cnt = new Array(len + 1).fill(0);
  cnt[0] = 1;

  let result = 0, odd = 0;
  for (let i = 0; i < len; i++) {
    odd += nums[i] & 1;
    result += odd >= k ? cnt[odd - k] : 0;
    cnt[odd] += 1;
  }

  return result;
};

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); // 2
console.log(numberOfSubarrays([2, 4, 6], 1)); // 0
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16