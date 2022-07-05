/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 * 
 * dp 状态可用 地板长度 & 地毯个数 定义
 * 低碳长度更适合划分状态，而状态定义需要体现出使用地毯的个数，故需要两个维度，二维数组
 * 
 * 定义 dp[i][j] 用以表示用 i 条地毯覆盖前 j 块砖时，未被覆盖的白色砖块的最少数目
 * 
 * 状态转移时可以考虑是否用第 i 条地毯，其末尾覆盖第 j 块砖
 * 使用:   dp[i][j] = f[i - 1][j - carpetLen]
 * 不使用: dp[i][j] = dp[i][j - 1] + Number(floor[j] === '1')
 * 
 * 二者取小【求解最少未覆盖第白色地砖】
 */
var minimumWhiteTiles = function (floor, numCarpets, carpetLen) {
  const len = floor.length;

  if (len < numCarpets * carpetLen) return 0;

  const dp = new Array(numCarpets + 1).fill(0).map(() => new Array(len).fill(0));
  dp[0][0] = floor.charAt(0) % 2;

  for (let i = 1; i < len; i++) {
    dp[0][i] = dp[0][i - 1] + floor.charAt(i) % 2;
  }

  for (let i = 1; i <= numCarpets; i++) {
    for (let j = carpetLen * i; j < len; j++) {
      dp[i][j] = Math.min(dp[i][j - 1] + floor.charAt(j) % 2, dp[i - 1][j - carpetLen]);
    }
  }

  return dp[numCarpets][len - 1];
};

console.log(minimumWhiteTiles("10110101", 2, 2)); // 2
console.log(minimumWhiteTiles("11111", 2, 3)); // 0