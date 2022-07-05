/**
 * @param {string} word
 * @return {number}
 * 
 * 题目求的是word中所有子字符串中的元音总数，等价为求包含元音的子字符串的数量之和。
 * 遍历 word 中的每个字符。对于第 i 个字符，如果它是元音，那么包含它的子串的左端点可以选择 0, 1, ⋯, i 一共 i+1 种，右端点可以选择 i, i+1, ⋯, n−1 一共 n−i 种
 */
var countVowels = function (word) {
  const list = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  const n = word.length;
  for (let i = 0; i < n; i++) {
    if (list.includes(word[i])) {
      count += (i + 1) * (n - i);
    }
  }
  return count;
};

console.log(countVowels("aba")); // 6
console.log(countVowels("abc")); // 3
console.log(countVowels("ltcd")); // 0
console.log(countVowels("noosabasboosa")); // 237