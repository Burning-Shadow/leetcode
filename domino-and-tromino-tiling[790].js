/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  const MOD = 1e9 + 7;
  /**
   * 4 列代表着第 i 列第四种状态：
   * 1. 上下均空 ———— [i - 1] 列必须全满，否则进入到 [i + 1] 列时无法补全 [i - 1] 列空出的位置
   * 2. 上空下满 ———— 该情况可能为 [i - 1] 列放置 ◸，亦或者 [i - 1] 上满下空的场景下塞了横向多米诺
   * 3. 上满下空 ———— 与上述情况相似
   * 4. 上下都满 ———— 2条横向多米诺 || 1条纵向多米诺 || 两个方位的 ◸
  */
  const dp = new Array(n + 1).fill(0).map(_ => new Array(4).fill(0));
  dp[0][3] = 1;

  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][3];
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % MOD;
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % MOD;
  }

  console.log(dp);
  return dp[n][3];
};


console.log(numTilings(3)); // 5
console.log(numTilings(1)); // 1