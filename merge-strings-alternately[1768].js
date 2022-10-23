/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const m = word1.length, n = word2.length;
  let i = 0, j = 0;

  const result = [];
  while (i < m || j < n) {
    if (i < m) {
      result.push(word1[i]);
      ++i;
    }
    if (j < n) {
      result.push(word2[j]);
      ++j;
    }
  }
  return result.join('');
};


console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // "apbqcd"
