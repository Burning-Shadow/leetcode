/**
 * @param {number[][]} triangle
 * @return {number}
 * 
 * dp
 */
var minimumTotal = function (triangle) {
  const len = triangle.length;
  const dp = new Array(len).fill(undefined).map(_ => new Array(len).fill(undefined));

  dp[0][0] = triangle[0][0];
  for (let i = 1; i < len; i++) dp[i][0] = dp[i - 1][0] + triangle[i][0];

  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= i; j++) {
      if (dp[i - 1][j] === undefined) dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      else dp[i][j] = Math.min(dp[i - 1][j] + triangle[i][j], dp[i - 1][j - 1] + triangle[i][j]);
    }
  }

  return Math.min(...dp[len - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
console.log(minimumTotal([[-10]])); // -10
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]])); // -1
