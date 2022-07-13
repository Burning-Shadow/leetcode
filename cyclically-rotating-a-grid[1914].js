/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;
  let result = JSON.parse(JSON.stringify(grid));
  let floor = Math.min(m, n) / 2;
  for (let i = 0; i < floor; i++) {
    const arr = [];

    // 取出来
    for (let j = i; j < m - i - 1; j++) arr.push(grid[j][i]);
    for (let k = i; k < n - i - 1; k++) arr.push(grid[m - i - 1][k]);
    for (let j = m - i - 1; j >= i + 1; j--) arr.push(grid[j][n - i - 1]);
    for (let k = n - i - 1; k >= i + 1; k--) arr.push(grid[i][k]);

    // 旋转
    let len = arr.length;
    let transCount = k % len;
    while (transCount > 0) {
      arr.unshift(arr.pop());
      transCount--;
    }

    // 放回去
    let p = 0;
    for (let j = i; j < m - i - 1; j++) result[j][i] = arr[p++];
    for (let k = i; k < n - i - 1; k++) result[m - i - 1][k] = arr[p++];
    for (let j = m - i - 1; j >= i + 1; j--) result[j][n - i - 1] = arr[p++];
    for (let k = n - i - 1; k >= i + 1; k--) result[i][k] = arr[p++];
  }
  return result;
};

console.log(rotateGrid([[40, 10], [30, 20]], 1)); // [[10,20],[40,30]]
console.log(rotateGrid([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2)); // [[3,4,8,12],[2,11,10,16],[1,7,6,15],[5,9,13,14]]