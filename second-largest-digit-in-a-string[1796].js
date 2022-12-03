/**
 * @param {string} s
 * @return {number}
 * 
 * O(n) 一次遍历
 */
var secondHighest = function (s) {
  let first = -1, second = -1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if ('0' <= c && c <= '9') {
      const num = c.charCodeAt() - '0'.charCodeAt();
      if (num > first) {
        second = first;
        first = num;
      } else if (num < first && num > second) {
        second = num;
      }
    }
  }
  return second;
};





console.log(secondHighest("abc1111")); // -1
console.log(secondHighest("dfa12321afd")); // 2
