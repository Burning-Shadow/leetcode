/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  const cnt = new Map();
  words.sort((a, b) => a.length - b.length);
  let res = 0;
  for (const word of words) {
    cnt.set(word, 1);
    for (let i = 0; i < word.length; i++) {
      const prev = word.substring(0, i) + word.substring(i + 1);
      if (cnt.has(prev)) {
        cnt.set(word, Math.max(cnt.get(word), cnt.get(prev) + 1));
      }
    }
    res = Math.max(res, cnt.get(word));
  }
  return res;
};




console.log(longestStrChain(["a","b","ba","bca","bda","bdca"])); // 4
console.log(longestStrChain(["xbc","pcxbcf","xb","cxbc","pcxbc"])); // 5
console.log(longestStrChain(["abcd","dbqca"])); // 1
