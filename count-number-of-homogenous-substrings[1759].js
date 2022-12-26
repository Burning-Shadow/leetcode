/**
 * @param {string} s
 * @return {number}
 * 
 * 长度为 m 的字符串的子字符串的数目为 (m × (m + 1)) / 2
 */
var countHomogenous = function (s) {
  const MOD = 1000000007;
  let res = 0;
  let prev = s[0];
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === prev) {
      cnt++;
    } else {
      res += (cnt + 1) * cnt / 2;
      cnt = 1;
      prev = c;
    }
  }
  res += (cnt + 1) * cnt / 2;
  return res % MOD;
};







console.log(countHomogenous("abbcccaa")); // 13
console.log(countHomogenous("xy")); // 2
console.log(countHomogenous("zzzzz")); // 15
