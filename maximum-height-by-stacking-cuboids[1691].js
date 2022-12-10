/**
 * @param {number[][]} cuboids
 * @return {number}
 * 
 * dp
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


/**
 * @param {number[][]} cuboids
 * @return {number}
 * 
 * 记忆搜索
 */
var maxHeight = function (cuboids) {
  const n = cuboids.length;
  for (const v of cuboids) {
    v.sort((a, b) => a - b);
  }
  cuboids.sort((a, b) => (a[0] + a[1] + a[2]) - (b[0] + b[1] + b[2]));

  const check = (a, b) => {
    return a[0] <= b[0] && a[1] <= b[1] && a[2] <= b[2];
  };
  
  const memo = new Array(n).fill(-1)

  const dfs = (cuboids, memo, top, index) => {
    if (index === cuboids.length) {
      return 0;
    }
    if (top !== -1 && memo[top] !== -1) {
      return memo[top];
    }
    let height = dfs(cuboids, memo, top, index + 1);
    if (top === -1 || check(cuboids[top], cuboids[index])) {
      height = Math.max(height, cuboids[index][2] + dfs(cuboids, memo, index, index + 1));
    }
    if (top != -1) {
      memo[top] = height;
    }
    return height;
  }
  return dfs(cuboids, memo, -1, 0);
}





console.log(maxHeight([[50, 45, 20], [95, 37, 53], [45, 23, 12]])); // 190
console.log(maxHeight([[38, 25, 45], [76, 35, 3]])); // 76
console.log(maxHeight([[7, 11, 17], [7, 17, 11], [11, 7, 17], [11, 17, 7], [17, 7, 11], [17, 11, 7]])); // 102
