/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const len = s.length;
  const dp = new Array(len).fill(false).map(() => new Array(len).fill(false));
  let cnt = 0;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        cnt += 1;
      }
    }
  }

  return cnt;
};

console.log(countSubstrings('abc'));
console.log(countSubstrings('aaa'));
