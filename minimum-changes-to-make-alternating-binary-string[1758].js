/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  const len = s.length;
  let cnt = 0;

  for (let i = 0; i < len; i++) {
    const c = s[i];
    if (c !== (String.fromCharCode('0'.charCodeAt() + i % 2))) {
      cnt++;
    }
  }

  return Math.min(cnt, len - cnt);
};




console.log(minOperations("0100")); // 1
console.log(minOperations("10")); // 0
console.log(minOperations("1111")); // 2
