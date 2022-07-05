/**
 * @param {string} s
 * @return {number}
 * 
 * 新增一个字符新增的引力数可以基于已有的数据计算出来，例如 abbca 可以由 abbc 新增 a 得来
 * (a 字符本身 1) + (一个字符产生的引力数 dp[i-1]) + (前面 i 个字符新增的引力数 i) - (上一次字符 a 出现的位置index.get(s[i]) + 1【因为 a 重复了，前面的引力数 i 算重复了】)
 */
var appealSum = function (s) {
  const dp = new Array(s.length).fill(0)
  dp[0] = 1
  const index = new Map()
  index.set(s[0], 0)
  for (let i = 1; i < s.length; i++) {
    dp[i] = dp[i - 1] + 1 + i - (index.has(s[i]) ? index.get(s[i]) + 1 : 0)
    index.set(s[i], i)
  }
  return dp.reduce((cur, next) => cur + next, 0)
};

console.log(appealSum("abbca")); // 28
console.log(appealSum("code")); // 20