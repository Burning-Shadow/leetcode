/**
 * @param {string} s
 * @return {string}
 */
const country = ["", "+*-", "+**-", "+***-"];

var maskPII = function (s) {
  const at = s.indexOf("@");
  if (at > 0) {
    s = s.toLowerCase();
    return (s[0] + "*****" + s.substring(at - 1)).toLowerCase();
  }
  let sb = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if ('0' <= c && c <= '9') {
      sb += c;
    }
  }
  s = sb.toString();
  return country[s.length - 10] + "***-***-" + s.substring(s.length - 4);
};




console.log(maskPII("LeetCode@LeetCode.com")); // "l*****e@leetcode.com"
console.log(maskPII("AB@qq.com")); // "a*****b@qq.com"
console.log(maskPII("1(234)567-890")); // "***-***-7890"
console.log(maskPII("86-(10)12345678")); // "+**-***-***-5678"
