/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 * 
 * 贪心。灵神讲的比较好，可以参考下
 * https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums/solutions/2166773/mei-you-si-lu-yi-ge-dong-hua-miao-dong-f-eezj/
 */
var restoreMatrix = function (rowSum, colSum) {
  const n = rowSum.length, m = colSum.length;
  const matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let i = 0, j = 0;
  while (i < n && j < m) {
    const v = Math.min(rowSum[i], colSum[j]);
    matrix[i][j] = v;
    rowSum[i] -= v;
    colSum[j] -= v;
    if (rowSum[i] === 0) ++i;
    if (colSum[j] === 0) ++j;
  }
  return matrix;
};




console.log(restoreMatrix([3, 8], [4, 7])); // [[1,2],[3,5]]
console.log(restoreMatrix([5, 7, 10], [8, 6, 8])); // [[0,5,0],[6,1,0],[2,0,8]]
console.log(restoreMatrix([14, 9], [6, 9, 8])); // [[0,9,5],[6,0,3]]
console.log(restoreMatrix([1, 0], [1])); // [[1],[0]]
console.log(restoreMatrix([0], [0])); // [[0]]
