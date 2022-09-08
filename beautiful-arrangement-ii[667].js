/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 * 
 * 既然是 k 个不同的值，那么就可进行拆分：
 * 1. 后半段为相隔为1的正常排序
 * 2. 前半段则差值为 n - 1、2 - n、((n-1) - 2)、(3 - (n-1))....
 * 
 * 综上，简单模拟即可
 */
var constructArray = function (n, k) {
  const answer = new Array(n).fill(0);
  let idx = 0;
  for (let i = 1; i < n - k; ++i) {
    answer[idx] = i;
    ++idx;
  }
  for (let i = n - k, j = n; i <= j; ++i, --j) {
    answer[idx] = i;
    ++idx;
    if (i !== j) {
      answer[idx] = j;
      ++idx;
    }
  }
  return answer;
};

console.log(constructArray(3, 1)); // [1, 2, 3]
console.log(constructArray(3, 2)); // [1, 3, 2]