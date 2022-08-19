/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * 二分查找
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;
    const x = matrix[Math.floor(mid / n)][mid % n];
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      high = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 
 * api 仔
 */
 var searchMatrix = function (matrix, target) {
  const arr = matrix.flat(2);
  return arr.includes(target);
};

// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  * 
//  * 自家土办法，但最后一个没过
//  */
// var searchMatrix = function (matrix, target) {
//   const m = matrix.length;
//   const n = matrix[0].length;

//   let i = 0; j = 0;

//   /**
//    * 这部分逻辑作为前置处理有些
//   */
//   if (matrix[i][j] === target) return true; // 兜底 1 * 1 的矩阵
//   if (m === 1) {
//     for (let i = 0; i < n; i++) if (matrix[0][i] === target) return true;
//     return false;
//   }

//   if (n === 1) {
//     for (let i = 0; i < m; i++) if (matrix[i][0] === target) return true;
//     return false;
//   }

//   while (i >= 0 && i < m - 1 && j >= 0 && j < n - 1) {
//     if (matrix[i][j] === target) return true;

//     const right = matrix[i][j + 1];
//     const down = matrix[i + 1][j];
//     const rightDown = matrix[i + 1][j + 1];
//     if (right === target || down === target || rightDown === target) return true;
//     if (right < target) return false;
//     if (right < target && down > target) {
//       j++;
//       continue;
//     } else {
//       i++;
//       continue;
//     }
//   }

//   return false;
// };


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false
console.log(searchMatrix([[1]], 1)); // true
console.log(searchMatrix([[1, 3]], 3)); // true
console.log(searchMatrix([[1], [3]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 5)); // true
