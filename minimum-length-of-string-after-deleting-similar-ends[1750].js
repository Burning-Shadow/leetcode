/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const n = s.length;
  let left = 0, right = n - 1;
  while (left < right && s[left] == s[right]) {
    const c = s[left];
    while (left <= right && s[left] === c) {
      left++;
    }
    while (left <= right && s[right] === c) {
      right--;
    }
  }
  return right - left + 1;
};





console.log(minimumLength("ca")); // 2
console.log(minimumLength("cabaabac")); // 0
