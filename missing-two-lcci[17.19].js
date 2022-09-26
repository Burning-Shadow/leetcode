/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 用例错误，非有序数组
 */
var missingTwo = function (nums) {
  let curr = 1,
    cnt = 0,
    idx = 0;
  const result = [];

  while (cnt < 2) {
    console.log(`idx = ${idx}, curr = ${curr}`);
    if (nums[idx] !== curr) {
      result.push(curr);
      cnt += 1;
    } else {
      idx += 1;
    }
    curr += 1;
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 位运算
 */
var missingTwo = function (nums) {
  let xorsum = 0;
  let n = nums.length + 2;
  for (const num of nums) {
    xorsum ^= num;
  }
  for (let i = 1; i <= n; i++) {
    xorsum ^= i;
  }
  let type1 = 0, type2 = 0;
  const lsb = xorsum & (-xorsum);
  for (const num of nums) {
    if (num & lsb) {
      type1 ^= num;
    } else {
      type2 ^= num;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (i & lsb) {
      type1 ^= i;
    } else {
      type2 ^= i;
    }
  }
  return [type1, type2];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 数学
 */
var missingTwo = function (nums) {
  let len = nums.length + 2,
    targetSum = Math.floor(len * (1 + len) / 2);

  for (let x of nums) targetSum -= x;
  let sum = targetSum, t = Math.floor(targetSum / 2);
  targetSum = Math.floor(t * (1 + t) / 2);
  for (let x of nums) {
    if (x <= t) targetSum -= x;
  }
  return [targetSum, sum - targetSum];
};

console.log(missingTwo([1])); // [2,3]
console.log(missingTwo([2, 3])); // [1,4]
