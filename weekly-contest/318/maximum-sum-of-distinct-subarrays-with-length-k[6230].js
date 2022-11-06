/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 超时
 */
// var maximumSubarraySum = function (nums, k) {
//   const len = nums.length;
//   let point = 0,
//     max = 0;

//   while (point < len - k + 1) {
//     let sumArr = [];
//     for (let i = point; i < point + k; i++) sumArr.push(nums[i]);

//     if (new Set(sumArr).size === sumArr.length) max = Math.max(max, sumArr.reduce((a, b) => a + b, 0));
//     point++;
//   }

//   return max;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 滑窗 + map遍历
 */
var maximumSubarraySum = function (nums, k) {
  const n = nums.length;
  const map = new Map();
  let sum = 0;
  let ans = 0;
  let l = 0, r = 0;
  while (r < n) {
    const v = nums[r];
    sum += v;
    increment(map, v);
    while (l <= r && (map.size > k || map.get(v) > 1)) {
      sum -= nums[l];
      decrement(map, nums[l]);
      l++;
    }
    if (r - l + 1 === k) {
      ans = Math.max(ans, sum);
    }
    r++;
  }

  return ans;
};

function increment(map, x) {
  map.set(x, (map.get(x) || 0) + 1);
}

function decrement(map, x) {
  if (map.get(x) === 1) {
    map.delete(x);
  } else {
    map.set(x, map.get(x) - 1);
  }
}


console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3)); // 15
console.log(maximumSubarraySum([4, 4, 4], 3)); // 0
console.log(maximumSubarraySum([1, 2, 2], 2)); // 3