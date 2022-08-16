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
 * https://leetcode.cn/problems/subarray-sums-divisible-by-k/solution/you-jian-qian-zhui-he-na-jiu-zai-ci-dai-ni-da-tong/
 */
const subarraysDivByK = (A, K) => {
  let preSumModK = 0;
  let count = 0;
  const map = { 0: 1 };
  for (let i = 0; i < A.length; i++) {
    preSumModK = (preSumModK + A[i]) % K; // 递推式子
    if (preSumModK < 0) {
      preSumModK += K;
    }
    if (map[preSumModK]) {      // 已经存在于map
      count += map[preSumModK]; // 把对应的次数累加给count
      map[preSumModK]++;        // 并且更新出现次数，次数+1
    } else {
      map[preSumModK] = 1;      // 之前没出现过，初始化值为1
    }
  }
  return count;
};


console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)); // 7
console.log(subarraysDivByK([5], 9)); // 0