/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length, columns = matrix[0].length;
  const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
  const total = rows * columns;
  const order = new Array(total).fill(0);

  let directionIndex = 0, row = 0, column = 0;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let i = 0; i < total; i++) {
    order[i] = matrix[row][column];
    visited[row][column] = true;
    const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
    if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }
  return order;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 
 * 1. 首先设定上下左右边界
 * 2. 其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界
 * 3. 判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案
 * 4. 若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理
 * 5. 不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  const result = [];

  let up = 0,
    down = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  while (true) {
    for (let i = left; i <= right; ++i) result.push(matrix[up][i]);
    if (++up > down) break;
    for (let i = up; i <= down; ++i) result.push(matrix[i][right]); //向下
    if (--right < left) break; //重新设定有边界
    for (let i = right; i >= left; --i) result.push(matrix[down][i]); //向左
    if (--down < up) break; //重新设定下边界
    for (let i = down; i >= up; --i) result.push(matrix[i][left]); //向上
    if (++left > right) break; //重新设定左边界
  }

  return result;
};




console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]F