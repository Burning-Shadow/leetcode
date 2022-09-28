/**
 * @param {number} k
 * @return {number}
 * 
 * 找规律题而已。顺序为 1 3 5 7 9 15 21 25 27 35 45
 */
var getKthMagicNumber = function (k) {
  const dp = new Array(k + 1).fill(0);
  dp[1] = 1;
  let p3 = 1, p5 = 1, p7 = 1;
  for (let i = 2; i <= k; i++) {
    const num3 = dp[p3] * 3, num5 = dp[p5] * 5, num7 = dp[p7] * 7;
    dp[i] = Math.min(Math.min(num3, num5), num7);
    if (dp[i] === num3) {
      p3++;
    }
    if (dp[i] === num5) {
      p5++;
    }
    if (dp[i] === num7) {
      p7++;
    }
  }
  return dp[k];
};

console.log(getKthMagicNumber(11)); // 45
console.log(getKthMagicNumber(5)); // 9