/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 * 
 * 枚举 + dp
 */
var maxRepeating = function (sequence, word) {
  const n = sequence.length;
  const m = word.length;
  if (n < m) return 0;

  const f = new Array(n).fill(0);
  for (let i = m - 1; i < n; ++i) {
    let valid = true;
    for (let j = 0; j < m; ++j) {
      if (sequence[i - m + j + 1] !== word[j]) {
        valid = false;
        break;
      }
    }
    if (valid) {
      f[i] = (i === m - 1 ? 0 : f[i - m]) + 1;
    }
  }

  return Math.max(...f);
};



console.log(maxRepeating("ababc", "ab")); // 2
console.log(maxRepeating("ababc", "ba")); // 1
console.log(maxRepeating("ababc", "ac")); // 0
