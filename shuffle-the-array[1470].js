/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = new Array(2 * n).fill(0);
  for (let i = 0; i < n; i++) {
    result[2 * i] = nums[i];
    result[2 * i + 1] = nums[i + n];
  }
  return result;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7] 
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2)); // [1,2,1,2]