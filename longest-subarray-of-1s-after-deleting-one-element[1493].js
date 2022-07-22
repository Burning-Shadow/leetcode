/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 遍历，O(n^3)，超时
 */
var longestSubarray = function (nums) {
  const len = nums.length;
  const list = [];

  // 遍历所有可能性
  for (let i = 0; i < len; i++) list.push(getLongestSubarray(nums.slice(0, i).concat(nums.slice(i + 1))));

  return Math.max(...list);
};

// 双指针判断可能性
function getLongestSubarray(arr) {
  const len = arr.length;
  let left = 0, right = 0, cnt = 0;;
  while (right < len) {
    if (arr[right] === 1) cnt = Math.max(cnt, right - left + 1)
    else left = right + 1;
    right += 1;
  }
  return cnt;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 三指针
 */
var longestSubarray = function (nums) {
  let length = nums.length;
  if (length == 1) return 0;
  let max = 0;
  let left = -nums[0], mid = left, right = left;
  function update() {
    let count1 = mid <= left + 1 ? 0 : mid - left - 1;
    let count2 = right <= mid + 1 ? 0 : right - mid - 1;
    max = Math.max(count1 + count2, max);
  }
  for (let i = 1; i < length; i++) {
    if (i == length - 1) {
      if (nums[i] == 0) {
        right = i;
        update();
      } else {
        right = length;
        update();
      };
      break;
    }
    if (nums[i] == 0) {
      right = i;
      if (left == mid) {
        mid = right;
      } else {
        update();
        left = mid;
        mid = right;
      }
    }
  }
  if (left == -nums[0] && mid == left && right == length) return length - 1;
  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 双指针 ———— 求最多只包含一个 0 的子字符串最大长度
 */
var longestSubarray = function (nums) {
  let left = 0;
  let cnt = 0; // 子串容忍度【最大为 1】
  let max = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) cnt += 1;
    while (cnt > 1) {
      if (nums[left] === 0) cnt -= 1;
      left += 1;
    }
    max = Math.max(max, right - left);
  }
  return max;
};

console.log(longestSubarray([1, 1, 0, 1])); // 3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
console.log(longestSubarray([1, 1, 1])); // 2
