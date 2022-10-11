/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 * map 统计技术
 */
var areAlmostEqual = function (s1, s2) {
  const len = s1.length;
  const diff = [];

  for (let i = 0; i < len; ++i) {
    if (s1[i] !== s2[i]) {
      if (diff.length >= 2) {
        return false;
      }
      diff.push(i);
    }
  }

  if (diff.length === 0) return true;
  if (diff.length !== 2) return false;
  return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};


console.log(areAlmostEqual("bank", "kanb")); // true
console.log(areAlmostEqual("attack", "defend")); // false
console.log(areAlmostEqual("kelb", "kelb")); // true
console.log(areAlmostEqual("abcd", "dcba")); // false