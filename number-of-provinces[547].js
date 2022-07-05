/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 找到矩阵中方块的数量【即岛屿问题】
  const n = isConnected.length;
  const record = new Array(n).fill(0);

  const traversal = (city) => {
    if (record[city] == 1) return;
    record[city] = 1;
    for (let i = 0; i < n; i++) {
      if (i !== city && isConnected[city][i] == 1) {
        traversal(i);
      }
    }
  }

  let count = 0
  for (let i = 0; i < n; i++) {
    if (!record[i]) {
      traversal(i);
      count++;
    }
  }
  return count;
};