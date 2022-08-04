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

var sortByBits = function (arr) {
  let hander = function (str) { return str.toString(2).split('').filter(x => { return x == 1 }).length }
  arr.sort((a, b) => { return a - b })
  return arr.sort((a, b) => {
    return hander(a) - hander(b)
  })
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])); // [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])); // [1,2,4,8,16,32,64,128,256,512,1024]
console.log(sortByBits([10000, 10000])); // [10000,10000]
console.log(sortByBits([2, 3, 5, 7, 11, 13, 17, 19])); // [2,3,5,17,7,11,13,19]
console.log(sortByBits([10, 100, 1000, 10000])); // [10,100,10000,1000]