/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 * 
 * 前缀和
 */
var minSubarray = function (nums, p) {
  let x = 0;
  for (const num of nums) x = (x + num) % p;
  if (x === 0) return 0;

  const index = new Map();
  let y = 0, result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    index.set(y, i); // f[i] mod p = y，因此哈希表记录 y 对应的下标为 i
    y = (y + nums[i]) % p;
    if (index.has((y - x + p) % p)) {
      result = Math.min(result, i - index.get((y - x + p) % p) + 1);
    }
  }
  return result === nums.length ? -1 : result;
};





console.log(minSubarray([3, 1, 4, 2], 6)); // 1
console.log(minSubarray([6, 3, 5, 2], 9)); // 2
console.log(minSubarray([1, 2, 3], 3)); // 0
console.log(minSubarray([1, 2, 3], 7)); // -1
console.log(minSubarray([1000000000, 1000000000, 1000000000], 3)); // 0
