/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * 
 * 计数排序
 */
var customSortString = function (order, s) {
  const freq = new Array(26).fill(0);
  for (const char of s) ++freq[char.charCodeAt() - 'a'.charCodeAt()];

  let result = '';
  for (const char of order) {
    while (freq[char.charCodeAt() - 'a'.charCodeAt()] > 0) {
      result += char;
      freq[char.charCodeAt() - 'a'.charCodeAt()]--;
    }
  }

  for (let i = 0; i < 26; ++i) {
    while (freq[i] > 0) {
      result += String.fromCharCode(i + 'a'.charCodeAt());
      freq[i]--;
    }
  }

  return result;
};


/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * 
 * 自定义 sort
 */
var customSortString = function (order, s) {
  const val = new Array(26).fill(0);
  for (let i = 0; i < order.length; ++i) {
    val[order[i].charCodeAt() - 'a'.charCodeAt()] = i + 1;
  }
  const arr = new Array(s.length).fill(0).map((_, i) => s[i]);
  arr.sort((c0, c1) => val[c0.charCodeAt() - 'a'.charCodeAt()] - val[c1.charCodeAt() - 'a'.charCodeAt()])
  let result = '';
  for (let i = 0; i < s.length; ++i) {
    result += arr[i];
  }
  return result;
};





console.log(customSortString("cba", "abcd")); // "cbad"
console.log(customSortString("cbafg", "abcd")); // "cbad"
