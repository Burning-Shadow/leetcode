/**
 * @param {number[][]} mat
 * @return {number}
 * 
 * 简单模拟
 */
var numSpecial = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  const rowsSum = new Array(m).fill(0);
  const colsSum = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rowsSum[i] += mat[i][j];
      colsSum[j] += mat[i][j];
    }
  }
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) {
        result++;
      }
    }
  }
  return result;
};

console.log(numSpecial([
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0]
])); // 1
console.log(numSpecial([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
])); // 3
console.log(numSpecial([
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0]
])); // 2
console.log(numSpecial([
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
])); // 3