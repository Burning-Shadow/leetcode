/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
// 动态规划
//  var findPaths = function(m, n, maxMove, startRow, startColumn) {
//   const MOD = 1000000007;
//   let result = 0;
//   const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

//   // 构造三维数组
//   let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
//   dp[startRow][startColumn] = 1;

//   for (var i = 0; i< maxMove; i++) {
//     const dpNew = new Array(m).fill(0).map(() => new Array(n).fill(0));
//     for (var j = 0; j < m; j++) {
//       for (var k = 0; k < n; k++) {
//         const cnt = dp[j][k];
//         if (cnt > 0) {
//           for (const direction of directions) {
//             let j1 = j + direction[0], k1 = k + direction[1];
//             if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
//               dpNew[j1][k1] = (dpNew[j1][k1] + cnt) % MOD;
//             } else {
//               result = (result + cnt) % MOD;
//             }
//           }
//         }
//       }
//     }
//     dp = dpNew;
//   }
//   return result;
// };

// dfs
// var findPaths = function(m, n, maxMove, startRow, startColumn) {
//   const MOD = 1000000007;
//   const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
//   /**
//    * @param {number} m 长
//    * @param {number} n 宽
//    * @param {number} moveCnt 已移动次数
//    * @param {number} i x坐标
//    * @param {number} j y坐标
//    * @return {number}
//    */
//   const dfs = (m, n, moveCnt, i, j) => {
//     if (i < 0 || j < 0 || i >= m || j >= n) return 1;
    
//     if (moveCnt === 0 || (i - moveCnt >= 0 && j - moveCnt >= 0 && i + moveCnt < m && j + moveCnt < n)) return 0;

//     let count = 0;
//     for (const direction of directions) {
//       count = (count + dfs(m, n, moveCnt - 1, i + direction[0], j + direction[1])) % MOD;
//     }

//     return count;
//   }

//   return dfs(m, n, maxMove, startRow, startColumn);
// };

var findPaths = function(m, n, maxMove, startRow, startColumn) {
  // 构造三维存储路径记录
  const MOD = 1000000007;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(maxMove + 1).fill(0)));

  const dfs = (m, n, moveCnt, i, j) => {
    let count = 0;

    // 能出去
    if (i < 0 || j < 0 || i >= m || j >= n) return 1;
    // 无移动次数 || 无论如何移动都无法走出当前网格
    if (moveCnt === 0 || (i - moveCnt >= 0 && j - moveCnt >= 0 && i + moveCnt < m && j + moveCnt < n)) return 0;
    if (dp[i][j][moveCnt]) return dp[i][j][moveCnt];

    for (const direction of directions) {
      count = (count + dfs(m, n, moveCnt - 1, i + direction[0], j + direction[1])) % MOD;
    }

    dp[i][j][moveCnt] = count;
    return count;
  }

  return dfs(m, n, maxMove, startRow, startColumn);
};

console.log(findPaths(2, 2, 2, 0, 0)); // 6
console.log(findPaths(1, 3, 3, 0, 1)); // 12