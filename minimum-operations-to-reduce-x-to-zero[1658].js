/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length;
  const sum = _.sum(nums);

  if (sum < x) {
    return -1;
  }

  let right = 0;
  let lsum = 0, rsum = sum;
  let result = n + 1;

  for (let left = -1; left < n; ++left) {
    if (left != -1) {
      lsum += nums[left];
    }
    while (right < n && lsum + rsum > x) {
      rsum -= nums[right];
      ++right;
    }
    if (lsum + rsum === x) {
      result = Math.min(result, (left + 1) + (n - right));
    }
  }

  return result > n ? -1 : result;
};









console.log(minOperations([1, 1, 4, 2, 3], 5)); // 2
console.log(minOperations([5, 6, 7, 8, 9], 4)); // -1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); // 5
