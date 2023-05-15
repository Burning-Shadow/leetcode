/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
  let m = matrix.length, n = matrix[0].length;
  let map = {};
  for (let i = 0; i < m; i++) {
    let arr = new Array(n).fill('0');
    for (let j = 0; j < n; j++) {
      // 如果 matrix[i][0] 为 1，则对该行元素进行翻转
      arr[j] = '0' + (matrix[i][j] ^ matrix[i][0]);
    }
    let s = arr.join('');
    map[s] = (map[s] || 0) + 1;
  }
  let res = 0;
  for (let key in map) {
    res = Math.max(res, map[key]);
  }
  return res;
}



console.log(maxEqualRowsAfterFlips([[0,1],[1,1]])); // 1
console.log(maxEqualRowsAfterFlips([[0,1],[1,0]])); // 2
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]])); // 2
