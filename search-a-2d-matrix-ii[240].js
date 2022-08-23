/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * 二分
 */
var searchMatrix = function (matrix, target) {
  for (const row of matrix) {
    let index = -1; // 记录 target 在对应 row 中的 Index
    let low = 0, high = row.length - 1;

    while (low <= high) {
      const mid = (high - low >> 1) + low;
      const num = row[mid];
      if (num === target) index = mid;
      else if (num > target) high = mid - 1;
      else low = mid + 1;
    }

    if (index >= 0) return true;
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * Z 字形查找
 * 我们可以从矩阵 \textit{matrix}matrix 的右上角 (0, n-1) 进行搜索。在每一步的搜索过程中，如果我们位于位置 (x, y)，那么我们希望在以 matrix 的左下角为左下角、以 (x, y) 为右上角的矩阵中进行搜索
 * 即行的范围为 [x, m - 1]，列的范围为 [0, y]：如果 matrix[x, y] === target，说明搜索完成；
 * 如果 matrix[x,y] > target，由于每一列的元素都是升序排列的，那么在当前的搜索矩阵中，所有位于第 y 列的元素都是严格大于 target 的，因此我们可以将它们全部忽略，即将 y 减少 1；
 * 如果 matrix[x,y] < target，由于每一行的元素都是升序排列的，那么在当前的搜索矩阵中，所有位于第 x 行的元素都是严格小于 target 的，因此我们可以将它们全部忽略，即将 x 增加 1。
 * 在搜索的过程中，如果我们超出了矩阵的边界，那么说明矩阵中不存在 target。
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let x = 0, y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) --y;
    else ++x;
  }
  return false;
};


console.log(searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 5));
console.log(searchMatrix([
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20
));