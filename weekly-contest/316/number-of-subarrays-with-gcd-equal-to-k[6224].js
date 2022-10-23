/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * unfinished
 */
var subarrayGCD = function (nums, k) {
  // 寻找最大公因数
  const getGreatestCommonDivisor = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return num / i > i ? num / i : i;
    }
    return num;
  };

  const isGreatestCommonDivisor = (target, num) => (
    target >= num
    && target % num === 0
    && getGreatestCommonDivisor(target) === num
  );

  const arr = nums.map(_ => isGreatestCommonDivisor(_, k));
  console.log(arr);

  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] % k) continue;
    for (let j = i; i < len; j++) {
      // 这里当时怎么跟 arr 联动没想好
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 滑窗
 */
var subarrayGCD = function (nums, k) {
  let result = 0
  const len = nums.length;
  const getGCG = (a, b) => {
    if(b === 0) return a;
    return getGCG(b, a % b);
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] % k) continue; // 提前剪枝
    let gcd = nums[i];
    for (let j = i; j < len; j++) {
      console.log(`gcd = ${gcd}, nums[j] = ${nums[j]}, nums[i] = ${nums[i]}`);
      gcd = getGCG(gcd, nums[j]);
      if (gcd === k) result += 1;
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 这里推荐看茶神的题解，没心思听了 https://leetcode.cn/problems/number-of-subarrays-with-gcd-equal-to-k/solution/by-endlesscheng-1f1r/
 * 
 * 1. 从右向左枚举，列出 GCD
 * 2. 在此过程中会涉及到大量的重复计算逻辑 ———— 
 *   2.1 自右向左罗列过程中发现 gcdArr 为递增，且不同的 GCD 数量最多为 nlogn
 *   2.2 相同 GCD 均相邻
 */
var subarrayGCD = function (nums, k) {
  const gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b);
  }
  const q1 = new Array(nums.length).fill(0);
  const q2 = new Array(nums.length).fill(0);
  for (let i = 0; i < q1.length; i++) {
    if (i == 0) {
      if (nums[i] % k == 0) q1[i] = 1;
      if (nums[q2.length - 1] % k == 0) q2[q2.length - 1] = 1;
    } else {
      if (nums[i] % k == 0) q1[i] = q1[i - 1] + 1;
      if (nums[q2.length - 1 - i] % k == 0) q2[q2.length - 1 - i] = q2[q2.length - i] + 1;
    }
  }
  let res = 0;
  let flag = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == k) res++;
    if (i < nums.length - 1 && gcd(nums[i], nums[i + 1]) == k) {
      res += (i > 0 ? (q1[i] - flag) : 1) * (q2[i + 1] || 1);
      flag = q1[i];
    }
    if (nums[i] % k !== 0) flag = 0;
  }
  return res;
};


console.log(subarrayGCD([9, 3, 1, 2, 6, 3], 3)); // 4
console.log(subarrayGCD([4], 7)); // 0
