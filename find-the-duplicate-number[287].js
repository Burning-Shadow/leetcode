// Ps 由于本题要求不修改数组，且只使用常量级的额外空间。而 num.length 最大值又在 10^5，故只能使用复杂度为 O(n) 的算法

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 二分查找
 */
var findDuplicate = function (nums) {
  const n = nums.length;
  let l = 1, r = n - 1, ans = -1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
      cnt += nums[i] <= mid;
    }
    if (cnt <= mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
      ans = mid;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 二进制
 */
var findDuplicate = function (nums) {
  const n = nums.length;
  let ans = 0;
  // 确定二进制下最高位是多少
  let bit_max = 31;
  while (!((n - 1) >> bit_max)) {
    bit_max -= 1;
  }
  for (let bit = 0; bit <= bit_max; ++bit) {
    let x = 0, y = 0;
    for (let i = 0; i < n; ++i) {
      if (nums[i] & (1 << bit)) {
        x += 1;
      }
      if (i >= 1 && (i & (1 << bit))) {
        y += 1;
      }
    }
    if (x > y) {
      ans |= 1 << bit;
    }
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 快慢指针
 */
var findDuplicate = function (nums) {
  let slow = 0, fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};


console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3