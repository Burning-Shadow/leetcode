/**
 * @param {number[]} arr
 * @return {number[]}
 * 
 * https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits/solution/-by-1105389168-x7z2/
 */
var sortByBits = function (arr) {
  // 计算n的二进制中1的数量
  const bitCount = n => {
    let count = 0;
    while (n) {
      n &= (n - 1); // 清除最低位的1
      count++;
    }
    return count;
  }

  // 如果有差，则按 bits 数排，如果无差，则按原值排
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};
