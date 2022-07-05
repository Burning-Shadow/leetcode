/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let i = 0; i <= n; i++) dp[0][i] = i;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }
    }
  }

  // console.log(dp)

  return dp[m][n];
};

console.log(minDistance('horse', 'ros')); // 3
console.log(minDistance('intention', 'execution')); // 5
console.log(minDistance('', '')); // 0
console.log(minDistance('a', 'b')); // 1