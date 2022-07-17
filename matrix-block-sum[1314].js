/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * 
 * 暴力求解 O(mnk^2)
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const anwser = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  const calcRange = (start, end, value) => {
    if (value < start) return start;
    if (value >= end) return end - 1;
    else return value;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const rStart = calcRange(0, m, i - k);
      const rEnd = calcRange(0, m, i + k);
      const cStart = calcRange(0, n, j - k);
      const cEnd = calcRange(0, n, j + k);

      for (let p = rStart; p <= rEnd; p++) {
        for (let q = cStart; q <= cEnd; q++) {
          anwser[i][j] += mat[p][q];
        }
      }
    }
  }

  return anwser;
};

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * 
 * 一维前缀和 ———— 行/列 前缀和【rowPrefix[i][j] 表示第 i 行， [0, j] 列的和， colPrefix[j][i] 表示第 j 列， [0, i] 行的和】
 * 行前缀和
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const rowPrefix = new Array(m).fill(0).map(_ => new Array(n + 1).fill(0));
  const anwser = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  // 计算前缀和
  for (let i = 0; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      rowPrefix[i][j] = rowPrefix[i][j - 1] + mat[i][j - 1];
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let r = Math.max(i - k, 0); r <= Math.min(i + k, m - 1); ++r) {
        // 由于 j - k < 0 或 j + k >= n，因此最大有效区间为 [Math.max(j-k, 0), Math.min(j+k, n-1)]
        anwser[i][j] += rowPrefix[r][Math.min(j + k, n - 1) + 1] - rowPrefix[r][Math.max(j - k, 0)];
      }
    }
  }

  return anwser;
};

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * 
 * 二维前缀和 ———— 方块面积相减，寻找左上角 & 右下角
 * https://leetcode.cn/problems/matrix-block-sum/solution/you-qian-ru-shen-bao-li-xing-lie-qian-zh-5503/
 */
var matrixBlockSum = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const prefix = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));
  const anwser = new Array(m).fill(0).map(_ => new Array(n).fill(0));

  // 前缀和计算【图解看备注中内容】
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      prefix[i][j] = prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + mat[i - 1][j - 1];
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // 计算左上角坐标 (row1, col1) 和右下角坐标 (row2, col2)
      let row1 = Math.max(i - k, 0), col1 = Math.max(j - k, 0);
      let row2 = Math.min(i + k, m - 1), col2 = Math.min(j + k, n - 1);
      anwser[i][j] = prefix[row2 + 1][col2 + 1] - prefix[row2 + 1][col1] - prefix[row1][col2 + 1] + prefix[row1][col1];
    }
  }
  return anwser;
};



console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)); // [[12,21,16],[27,45,33],[24,39,28]]
console.log(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2)); // [[45,45,45],[45,45,45],[45,45,45]]