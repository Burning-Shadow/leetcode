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


console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false
console.log(searchMatrix([[1]], 1)); // true