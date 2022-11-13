/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * 中心扩展 + set 统计最大串
 * 用例 4 无法通过
 */
var maxPalindromes = function (s, k) {
  const set = [];

  const isPalidromic = (str) => {
    if (!str || str.length < k) return false;
    const len = set.length;
    for (let i = 0; i < len; i++) {
      const item = set[i];
      if (item === str) return false;
      if (item.includes(str)) return false;
      if (str.includes(item)) {
        set[i] = str;
        return false;
      }
    }
    for (const item of set)
      if (item === str || item.includes(str))
        return false;
    return true;
  };

  const helper = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const maxStr = s.slice(left + 1, right + 1 - 1);
    if (isPalidromic(maxStr)) set.push(maxStr);
  }

  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }

  console.log(set);
  return set.length;
};


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * dp + 中心扩展
 */
var maxPalindromes = function (s, k) {
  const len = s.length;
  const dp = new Array(len + 1).fill(0);

  for (let i = 0; i < (2 * len - 1); i++) {
    // 中心扩展法
    let left = i >> 1;
    let right = left + i % 2;

    dp[left + 1] = Math.max(dp[left + 1], dp[left]);

    for (; left >= 0 && right < len && s[left] === s[right]; --left, ++right) {
      if (right - left + 1 >= k) {
        dp[right + 1] = Math.max(dp[right + 1], dp[left] + 1);
      }
    }
  }

  return dp[len];
};



console.log(maxPalindromes("abaccdbbd", 3)); // 2
console.log(maxPalindromes("adbcda", 2)); // 0
console.log(maxPalindromes("fttfjofpnpfydwdwdnns", 2)); // 4
console.log(maxPalindromes("iqqibcecvrbxxj", 1)); // 14
