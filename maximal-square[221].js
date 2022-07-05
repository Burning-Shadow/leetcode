/**
 * @param {character[][]} matrix
 * @return {number}
 */
// var maximalSquare = function (matrix) {
//   const m = matrix.length;
//   const n = matrix[0].length;
//   let maxSide = 0;

//   /**
//    * 遍历时间成本过高，舍弃
//    * @param {number} i 横坐标
//    * @param {number} j 纵坐标
//    * @param {number} len 正方形长度
//    */
//   const isSquare = (i, j, len) => {
//     for (let p = i; p < i + len; p++) {
//       for (let q = j; q < j + len; q++) {
//         if (matrix[p][q] !== '1') return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] !== '1') continue;

//       // 可作为正方形的一角
//       maxSide = Math.max(maxSide, 1);
//       const currentMaxSide = Math.min(m - i, n - j);
//       for (let k = 1; k < currentMaxSide; k++) {
//         // 剪枝
//         if (matrix[i + k][j + k] === '0') break;

//         let flag = true;
//         // 判断是否为正方形
//         // const flag = isSquare(i, j, k + 1);
//         for (let a = 0; a < k; a++) {
//           if (matrix[i + k][j + a] == '0' || matrix[i + a][j + k] == '0') {
//             flag = false;
//             break;
//           }
//         }

//         // console.log(`maxSide = ${maxSide}, k = ${k}`);
//         if (flag) maxSide = Math.max(maxSide, k + 1);
//         else break;
//       }
//     }
//   }

//   return maxSide * maxSide;
// };

var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  let maxSide = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== '1') continue;

      if (i === 0 || j === 0) dp[i][j] = 1;
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;

      maxSide = Math.max(dp[i][j], maxSide);
    }
  }

  return maxSide * maxSide;
}

console.log(maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
])); // 4

console.log(maximalSquare([
  ["0", "1"],
  ["1", "0"],
])); // 1

console.log(maximalSquare([
  ["0", "1"]
])); // 1

console.log(maximalSquare([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "0"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["0", "0", "1", "1", "1"],
])); // 16