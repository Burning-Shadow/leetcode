/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed);
  let cnt = 0;

  for (const word of words) {
    const set = new Set(word);
    let flag = true;
    for (char of set) {
      if (!allowedSet.has(char)) {
        flag = false;
        break;
      }
    }
    flag ? cnt += 1: '';
  }

  return cnt;
};


console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"])); // 2
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])); // 7
console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])); // 4