/**
 * @param {string} s
 * @return {number}
 * 
 * 动归
 * 若无重复字符串则就是一个简单的数学问题，但题目并未标识，故需要减去相同字符的子序列
 * https://leetcode.cn/problems/distinct-subsequences-ii/solution/zhua-wa-mou-si-tu-jie-leetcode-by-muse-7-j2sy/
 */
var distinctSubseqII = function (s) {
  const MOD = 1e9 + 7;
  let result = 0;
  const letter = new Array(26).fill(0);

  for (const char of s) {
    const idx = char.charCodeAt() - 97;
    const pre = letter[idx];
    letter[idx] = (result + 1) % MOD;
    result = (result + letter[idx] - pre + MOD) % MOD; // 加mod的目的是为了防止结果溢出为负数
  }

  return result;
};


console.log(distinctSubseqII("abc")); // 7
console.log(distinctSubseqII("aba")); // 6
console.log(distinctSubseqII("aaa")); // 3