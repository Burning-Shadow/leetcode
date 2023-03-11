/**
 * @param {string[]} array
 * @return {string[]}
 * 
 * 前缀和 + hash
 * https://leetcode.cn/problems/find-longest-subarray-lcci/solutions/2160308/tao-lu-qian-zhui-he-ha-xi-biao-xiao-chu-3mb11/
 */
var findLongestSubarray = function (array) {
  const indices = new Map();
  indices.set(0, -1);
  let sum = 0;
  let maxLength = 0;
  let startIndex = -1;
  const n = array.length;
  for (let i = 0; i < n; i++) {
    if (isLetter(array[i][0])) sum++;
    else sum--;

    if (indices.has(sum)) {
      const firstIndex = indices.get(sum);
      if (i - firstIndex > maxLength) {
        maxLength = i - firstIndex;
        startIndex = firstIndex + 1;
      }
    } else {
      indices.set(sum, i);
    }
  }
  if (maxLength === 0) return [];
  return [...array.slice(startIndex, startIndex + maxLength)];
};

const isLetter = (ch) => {
  return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z';
}




console.log(findLongestSubarray(["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7", "H", "I", "J", "K", "L", "M"])); // ["A","1","B","C","D","2","3","4","E","5","F","G","6","7"]
console.log(findLongestSubarray(["A", "A"])); // []
