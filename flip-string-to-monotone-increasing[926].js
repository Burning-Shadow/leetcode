/**
 * @param {string} s
 * @return {number}
 * 
 * dp[i][0] 代表 s[i] 为 0 时最少翻转次数
 * dp[i][1] 代表 s[i] 为 1 时最少翻转次数
 */
 var minFlipsMonoIncr = function (s) {
  const len = s.length;
  let dp0 = dp1 = 0;

  for (let i = 1; i <= len; i++) {
    if ("0" === s[i - 1]) {
      dp1 = Math.min(dp0, dp1) + 1;
    } else {
      dp1 = Math.min(dp0, dp1);
      dp0 = dp0 + 1;
    }
  }

  return Math.min(dp0, dp1);
};

console.log(minFlipsMonoIncr("00110")); // 1
console.log(minFlipsMonoIncr("010110")); // 2
console.log(minFlipsMonoIncr("00011000")); // 2
console.log(minFlipsMonoIncr("00110")); // 1