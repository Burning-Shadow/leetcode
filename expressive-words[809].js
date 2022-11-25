/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
  let result = 0;

  const expand = (s, t) => {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
      if (s[i] !== t[j]) {
        return false;
      }
      const ch = s[i];
      let cnti = 0;
      while (i < s.length && s[i] === ch) {
        ++cnti;
        ++i;
      }
      let cntj = 0;
      while (j < t.length && t[j] === ch) {
        ++cntj;
        ++j;
      }
      if (cnti < cntj) {
        return false;
      }
      if (cnti !== cntj && cnti < 3) {
        return false;
      }
    }
    return i === s.length && j === t.length;
  };

  for (const word of words) {
    if (expand(s, word)) {
      ++result;
    }
  }
  return result;
}



console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"])); // 1
