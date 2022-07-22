/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  // t 为长串 s 为短串
  if (s.length > t.length) {
    let tmp = s;
    s = t;
    t = tmp;
  }

  const isValidDiff = (s1, s2, n) => {
    let diffCnt = 0;
    for (let i = 0; i < n; i++) {
      if (s1[i] !== s2[i]) diffCnt += 1;
      if (diffCnt > 1) return false;
    }
    return diffCnt === 1;
  }

  let res = 0;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= s.length - i; j++) {
      const s1 = s.substring(j, j + i);
      for (let k = 0; k <= t.length - i; k++) {
        const s2 = t.substring(k, k + i);
        console.log(`s1 = ${s1}, s2 = ${s2}`);
        if (isValidDiff(s1, s2, s1.length)) {res += 1; console.log(` + 1 >>>>>>>>>>>>>>>>>>>>>>>>>`)}
      }
    }
  }
  return res;
};


console.log(countSubstrings("aba", "baba")); // 6
console.log(countSubstrings("ab", "bb")); // 3
console.log(countSubstrings("a", "a")); // 0
console.log(countSubstrings("abe", "bbc")); // 10