/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let i = j = 0;
  while (j < t.length && i < s.length) {
    if (s[i] === t[j]) { i++; j++; }
    else j++;
  }

  return i === s.length;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("acb", "ahbgdc")); // false
console.log(isSubsequence("aaaaaa", "bbaaaa")); // false
