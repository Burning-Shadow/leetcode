/**
 * @param {string} s
 * @return {boolean}
 * 
 * 1. 字符串 s 中包含零个由连续 1 组成的字段，那么整个串的表示为 00⋯00。
 * 2. 字符串 s 中只包含一个由连续 1 组成的字段，因为已知字符串 s 不包含前导零，所以整个串的表示为 1⋯100⋯00。
 * 
 * 综上，两种情况来看均无 '01' 的存在，故检索字符串即可
 */
var checkOnesSegment = function (s) {
  return s.indexOf('01') === -1;
};

console.log(checkOnesSegment("1001")); // false
console.log(checkOnesSegment("110")); // true