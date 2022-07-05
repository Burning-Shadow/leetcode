/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
// var maximumWhiteTiles = function(tiles, carpetLen) {
//   const [largestNum] = tiles.flat().sort((a, b) => b - a);
//   if (largestNum < carpetLen) return largestNum;

//   // dp[i] 代表地毯盖前 i 块砖时所覆盖住的最大白砖面积
//   const dp = new Array(largestNum + 1).fill(0);
//   // 初始化地砖数组【true 为可覆盖的白色区域，false 为无效覆盖区域】
//   const list = [...dp].map((_, idx) => tiles.some(item => item[0] <= idx && item[1] >= idx));
//   dp[0] = 0;

//   for (let i = 1; i < carpetLen; i++) {
//     dp[i] = Math.max(dp[i - 1] + Number(list[i]));
//   }
//   for (let i = carpetLen; i <= largestNum; i++) {
//     dp[i] = Math.max(dp[i - 1] + Number(list[i]) - Number(list[i - carpetLen + 1]), dp[i - 1]);
//   }

//   return dp[largestNum];
// };

/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */

var maximumWhiteTiles = function (tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);
  const len = tiles.length;
  let sum = 0;
  let left = 0,
    right = 0;
  let max = 0;

  while (left <= right && right < len) {
    const leftBoundary = tiles[left][0];
    const rightBoundary = leftBoundary + carpetLen - 1;

    // 毯子覆盖了 right 的所有砖块，那么把 right 的所有砖块加上，记录最大值
    if (rightBoundary >= tiles[right][1]) {
      sum += tiles[right][1] - tiles[right][0] + 1;
      max = Math.max(max, sum);
      right++;
    } else {
      // 毯子覆盖了 right 的部分砖块，那么把 right 的部分砖块加上，记录最大值
      if (rightBoundary >= tiles[right][0]) {
        // 注意：此处 right 中覆盖的部分砖块不能加到 sum 里，直接执行 `sum += rightBoundary - tiles[right][0] + 1`
        // 因为下一次对齐左端点的时候，这部分砖块会计算重复
        max = Math.max(max, sum + rightBoundary - tiles[right][0] + 1);
      }
      sum -= (tiles[left][1] - leftBoundary + 1);
      left++;
    }
  }

  return max;
};

console.log(maximumWhiteTiles([
  [1, 5],
  [10, 11],
  [12, 18],
  [20, 25],
  [30, 32]
], 10)); // 9
console.log(maximumWhiteTiles([
  [10, 11],
  [1, 1]
], 2)); // 2
console.log(maximumWhiteTiles([
  [8051, 8057],
  [8074, 8089],
  [7994, 7995],
  [7969, 7987],
  [8013, 8020],
  [8123, 8139],
  [7930, 7950],
  [8096, 8104],
  [7917, 7925],
  [8027, 8035],
  [8003, 8011]
], 9854)); // 126