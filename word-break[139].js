/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 
 * s 的前 i 个字符能否分解为单词表单词
 */
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] == true) break;
      if (dp[j] == false) continue;
      const suffix = s.slice(j, i);
      if (wordDict.includes(suffix) && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[len];
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false