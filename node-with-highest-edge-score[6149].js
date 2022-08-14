/**
 * @param {number[]} edges
 * @return {number}
 * 
 * https://leetcode.cn/contest/weekly-contest-306
 */
var edgeScore = function (edges) {
  const len = edges.length;
  let max = -Infinity, result = 0;
  const arr = new Array(len).fill(0);

  for (let i = 0; i < len; i++) arr[edges[i]] += i; 
  arr.forEach((item, idx) => {
    if (item > max) {
      max = item;
      result = idx;
    }
  });

  return result;
};

console.log(edgeScore([1, 0, 0, 0, 0, 7, 7, 5])); // 7
console.log(edgeScore([2, 0, 0, 2])); // 0