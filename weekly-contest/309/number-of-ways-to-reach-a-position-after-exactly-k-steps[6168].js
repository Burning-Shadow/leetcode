/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 * 
 * 超时
 */
var numberOfWays = function (startPos, endPos, k) {
  let cnt = 0;
  const MOD = 1e9 + 7;

  const dfs = (currPos, step) => {
    if (currPos === endPos && step === 0) cnt = (cnt + 1) % MOD;
    if (step <= 0) return;
    if (step >= Math.abs(currPos + 1 - endPos)) dfs(currPos + 1, step - 1);
    if (step >= Math.abs(currPos - 1 - endPos)) dfs(currPos - 1, step - 1);
  };

  dfs(startPos, k);

  return cnt;
};


/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 * 
 * dfs + cache
 */
var numberOfWays = function (startPos, endPos, k) {
  const MOD = 1e9 + 7;
  const cache = new Map();

  const dfs = (pos, step) => {
    const key = `${pos},${step}`;
    if (cache.has(key)) return cache.get(key);
    // 递归终止条件: 相隔终点距离大于剩余步数
    if (Math.abs(pos - endPos) > step) return 0
    // 递归终止条件: 步数走完，算一种方案，这里pos一定等于endPos 否则就被上面条件终止了
    if (step === 0) return 1;

    const prev = dfs(pos - 1, step - 1);
    const next = dfs(pos + 1, step - 1);
    const sum = (prev + next) % MOD;
    cache.set(key, sum);
    return sum;
  }

  return dfs(startPos, k)
};

/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 * 
 * dp
 */
var numberOfWays = function (startPos, endPos, k) {
  startPos += 1000;
  endPos += 1000;
  const dp = new Array(1001).fill(0).map(() => new Array(3002).fill(0));
  const MOD = 1e9 + 7;
  dp[0][startPos] = 1;

  for (let step = 1; step <= k; step++) {
    for (let i = 0; i < 3001; i++) {
      dp[step][i] = (dp[step - 1][i - 1] + dp[step - 1][i + 1]) % MOD;
    }
  }

  return dp[k][endPos];
};


console.log(numberOfWays(1, 2, 3)); // 3
console.log(numberOfWays(2, 5, 10)); // 0
console.log(numberOfWays(989, 1000, 99)); // 0
console.log(numberOfWays(272, 270, 6)); // 15
