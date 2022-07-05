/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < len; j++) {
      [matrix[i][j], matrix[len - i - 1][j]] = [matrix[len - i - 1][j], matrix[i][j]];
    }
  }
  // 主对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); // [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]