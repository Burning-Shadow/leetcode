/**
 * @param {number[][]} points
 * @return {number}
 * 
 * 超时，时间复杂度为 O(m*n*n)
 */
// var maxPoints = function (points) {
//   const row = points.length;
//   const column = points[0].length;
//   const dp = new Array(row).fill(0).map(_ => new Array(column).fill(-Infinity));

//   for (let i = 0; i < column; i++) dp[0][i] = points[0][i];

//   for (let i = 1; i < row; i++) {
//     for (let j = 0; j < column; j++) {
//       const currValue = points[i][j];
//       for (let k = 0; k < column; k++) {
//         dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] - Math.abs(k - j) + currValue);
//       }
//     }
//   }

//   return Math.max(...dp[row - 1]);
// };

/**
 * @param {number[][]} points
 * @return {number}
 * 
 * 时间复杂度为 O(m*n)
 */
var maxPoints = function (points) {
  const row = points.length;
  const column = points[0].length;
  const dp = new Array(column).fill(0);

  for (let i = 0; i < row; i++) {
    const curr = new Array(column + 1);
    let lMax = 0;
    for (j = 0; j < column; j++) {
      lMax = Math.max(lMax - 1, dp[j]);
      curr[j] = lMax;
    }
    let rMax = 0;
    for (let j = column - 1; j >= 0; j--) {
      rMax = Math.max(rMax - 1, dp[j]);
      curr[j] = Math.max(curr[j], rMax);
    }
    for (let j = 0; j < column; j++) {
      dp[j] = curr[j] + points[i][j];
    }
  }

  return Math.max(...dp, 0);
};

console.log(maxPoints([[1, 2, 3], [1, 5, 1], [3, 1, 1]])); // 9
console.log(maxPoints([[1, 5], [2, 3], [4, 2]])); // 11