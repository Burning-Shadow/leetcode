/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * dp 不太行，因为对 length 做了限制
 */
var subarraysDivByK = function (nums, k) {
  const len = nums.length;
  const dp = new Array(len).fill(0).map(_ => new Array(len).fill(0));
  let cnt = 0;

  dp[0][0] = nums[0];
  for (let i = 0; i < len; i++) {
    dp[i][i] = nums[i];
    if (!(dp[i][i] % k)) cnt += 1;
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = dp[i][j - 1] + nums[j];
      if (!(dp[i][j] % k)) cnt += 1;
    }
  }

  return cnt;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 前缀和 + 模运算
 * 假设前缀和 befores1 和 befores2，只要 befores1 % k === befores2 % k，这样 befores1 和 befores2 之间的数组成的子数组之和就能被K整除；
 * https://leetcode.cn/problems/subarray-sums-divisible-by-k/solution/you-jian-qian-zhui-he-na-jiu-zai-ci-dai-ni-da-tong/
 */
var subarraysDivByK = function (nums, k) {
  let len = nums.length;
  let befores = [0];
  for (let i = 0; i < len; i++) befores.push(befores[i] + nums[i]);
  console.log('befores = ', befores);

  let count = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 1; i <= len; i++) {
    let mod = ((befores[i] % k) + k) % k;
    console.log('MOD = ', mod);
    if (map.has(mod)) {
      count += map.get(mod);
      console.log('count = ', count);
    }
    let c = map.has(mod) ? map.get(mod) : 0;
    map.set(mod, c + 1);
  }
  console.log(map);
  return count;
}


console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // 7
console.log(subarraysDivByK([5], 9)); // 0