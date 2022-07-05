/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 
 * dp[i][j] 表示 s 的前 i 个字符与 p 中的前 j 个字符是否能够匹配
 * 从右向左扫，判断是否为 *，若非 * 则横向比较，若为 * 则检查 s[i - 1]是否为 '.' 或与 p[j] 相等
 * 
 * 字母 + 星号的组合在匹配的过程中，本质上只会有两种情况：
 *   匹配 s 末尾的一个字符，将该字符扔掉，而该组合仍可以继续匹配
 *   不匹配字符，将该组合扔掉，不再进行匹配
 * 
 * 由此可得表达式
 *  s[i] 和 p[j] 均为小写字母: dp[i][j] === dp[i - 1][j - 1] 或 false
 *  p[j] 为 *:               dp[i][j] = dp[i][j - 2];
 *  
 */
const isMatch = (s, p) => {
  if (s == null || p == null) return false;

  const sLen = s.length,
    pLen = p.length;
  const dp = new Array(sLen + 1).fill(false).map(_ => new Array(pLen + 1).fill(false));
  dp[0][0] = true;

  for (let j = 1; j <= pLen; j++) {
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      // s、p 末位相匹配或 p 末位为 '.'，此时 向前考察
      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        // p 末位为 '*'，此时分情况讨论

        // s 末位与 p 次末位相等 || p 末位为 '.' ———— 向前
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else { // 沿用之前状态
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};


console.log(isMatch("aa", "a")); // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true