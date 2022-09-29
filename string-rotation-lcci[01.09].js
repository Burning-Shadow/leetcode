/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  const m = s1.length, n = s2.length;
  if (m !== n) return false;
  if (n === 0) return true;

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = 0; j < n; j++) {
      if (s1[(i + j) % n] !== s2[j]) {
        flag = false;
        break;
      }
    }
    if (flag) return true;
  }
  return false;
};


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
};


console.log(isFlipedString("waterbottle", "erbottlewat")); // True
console.log(isFlipedString("aa", "aba")); // False