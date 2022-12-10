/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function (cuboids) {
  const n = cuboids.length;
  for (const v of cuboids) {
    // 排序三条边
    v.sort((a, b) => a - b);
  }
  cuboids.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]));
  let result = 0;
  const dp = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i][2];
    for (let j = 0; j < i; j++) {
      if (cuboids[i][0] >= cuboids[j][0] &&
        cuboids[i][1] >= cuboids[j][1] &&
        cuboids[i][2] >= cuboids[j][2]) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
      }
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};




console.log(maxHeight([[50, 45, 20], [95, 37, 53], [45, 23, 12]])); // 190
console.log(maxHeight([[38, 25, 45], [76, 35, 3]])); // 76
console.log(maxHeight([[7, 11, 17], [7, 17, 11], [11, 7, 17], [11, 17, 7], [17, 7, 11], [17, 11, 7]])); // 102
