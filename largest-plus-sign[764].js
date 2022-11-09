/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 * 
 * 大用例超时
 */
var orderOfLargestPlusSign = function (n, mines) {
  let result = 0;
  const dp = new Array(n).fill(0).map(_ => new Array(n).fill(0));

  const calcStep = (i, j, addX, addY, len) => {
    if (
      i >= 0
      && i < n
      && j >= 0
      && j < n
      && grid[i][j]
    ) return calcStep(i + addX, j + addY, addX, addY, len + 1);
    else return len;
  };

  const grid = new Array(n).fill(1).map(_ => new Array(n).fill(1));
  for (const position of mines) {
    const [x, y] = position;
    grid[x][y] = 0;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        dp[i][j] = Math.min(
          calcStep(i, j, 1, 0, 0),
          calcStep(i, j, -1, 0, 0),
          calcStep(i, j, 0, 1, 0),
          calcStep(i, j, 0, -1, 0),
        );
      }
    }
  }

  // console.log(dp);
  return Math.max(...dp.flat(1));
};


/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(n));
  const banned = new Set();
  for (const vec of mines) {
    banned.add(vec[0] * n + vec[1]);
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    /* left */
    for (let j = 0; j < n; j++) {
      if (banned.has(i * n + j)) {
        count = 0;
      } else {
        count++;
      }
      dp[i][j] = Math.min(dp[i][j], count);
    }
    count = 0;
    /* right */
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(i * n + j)) {
        count = 0;
      } else {
        count++;
      }
      dp[i][j] = Math.min(dp[i][j], count);
    }
  }
  for (let i = 0; i < n; i++) {
    let count = 0;
    /* up */
    for (let j = 0; j < n; j++) {
      if (banned.has(j * n + i)) {
        count = 0;
      } else {
        count++;
      }
      dp[j][i] = Math.min(dp[j][i], count);
    }
    count = 0;
    /* down */
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(j * n + i)) {
        count = 0;
      } else {
        count++;
      }
      dp[j][i] = Math.min(dp[j][i], count);
      ans = Math.max(ans, dp[j][i]);
    }
  }
  return ans;
};



console.log(orderOfLargestPlusSign(5, [[4, 2]])); // 2
console.log(orderOfLargestPlusSign(1, [[0, 0]])); // 0
