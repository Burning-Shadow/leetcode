/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 * 
 * 暴力枚举
 */
var findSolution = function (customfunction, z) {
  const result = [];
  for (let x = 1; x <= 1000; x++) {
    for (let y = 1; y <= 1000; y++) {
      if (customfunction.f(x, y) === z) {
        result.push([x, y]);
      }
    }
  }
  return result;
};


/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 * 
 * 双指针
 * https://leetcode.cn/problems/find-positive-integer-solution-for-a-given-equation/solutions/2117698/xiang-xiang-shuang-zhi-zhen-yi-ge-shi-pi-nr4y/
 */
var findSolution = function(customfunction, z) {
  const res = [];
  for (let x = 1, y = 1000; x <= 1000 && y >= 1; x++) {
      while (y >= 1 && customfunction.f(x, y) > z) {
          y--;
      }
      if (y >= 1 && customfunction.f(x, y) === z) {
          res.push([x, y]);
      }
  }
  return res;
};






console.log(findSolution());
