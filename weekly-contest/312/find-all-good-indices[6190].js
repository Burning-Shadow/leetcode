/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * 递推 + 枚举
 */
var goodIndices = function (nums, k) {
  const len = nums.length;
  const increase = new Array(len).fill(1);
  const decrease = new Array(len).fill(1);
  const result = [];

  for (let i = 1; i < len; i++) {
    if (nums[i] >= nums[i - 1]) {
      increase[i] += increase[i - 1];
    } else {
      increase[i] = 0;
    }

    if (nums[i] <= nums[i - 1]) {
      decrease[i] += decrease[i - 1];
    } else {
      decrease[i] = 0;
    }
  }

  // console.log(`increase = ${increase}`);
  // console.log(`decrease = ${decrease}`);

  for (let i = k; i <= len - k; i++) {
    if ((decrease[i - 1] - decrease[i - k] === k - 1)
      && (increase[i + k] - increase[i + 1] === k - 1)) {
      result.push(i);
    }
  }

  return result;
};

console.log(goodIndices([2, 1, 1, 1, 3, 4, 1], 2)); // [2, 3]
console.log(goodIndices([2, 1, 1, 2], 2)); // []
console.log(goodIndices([878724, 201541, 179099, 98437, 35765, 327555, 475851, 598885, 849470, 943442], 4)); // [4, 5]
