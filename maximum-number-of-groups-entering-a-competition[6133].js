/**
 * @param {number[]} grades
 * @return {number}
 * 
 * 说白了是个脑筋急转弯，假设分为 x 个组
 * 那么排序后的数组从小到大排列后以每组 1、2、3、4的顺序一直向后区，可得
 * 1 + 2 + 3 + .... + x <= n
 * 即 x(x + 1) / 2 <= n
 */
var maximumGroups = function (grades) {
  const len = grades.length;
  return Math.floor((-1 + Math.sqrt(1 + 8 * len)) / 2);
};

/**
 * @param {number[]} grades
 * @return {number}
 * 
 * 原理同上
 */
 var maximumGroups = function (grades) {
  let pre = 0;
  let size = grades.length;
  while (size) {
    pre++;
    size -= pre;
    if (size <= pre) return pre;
  }
};

console.log(maximumGroups([10, 6, 12, 7, 3, 5])); // 3
console.log(maximumGroups([8, 8])); // 1