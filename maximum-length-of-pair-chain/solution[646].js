/**
 * @param {number[][]} pairs
 * @return {number}
 */
 var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0] - b[0]);
  const len = pairs.length;
  const dp = new Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[i][0] > pairs[j][1]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return dp[len - 1];
};
