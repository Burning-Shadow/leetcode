/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 * 
 * 二分查找
 * 
 * 假设 y 为分配结束后袋子中的最大球数
 * 当 nums[i] <= y 时无需进行操作
 * 当 nums[i] <= 2 * y 时进行 1 次操作
 * 当 nums[i] <= 3 * y 时进行 2 次操作
 * ....
 * 
 * 故总操作数为
 * 
 * P= ∑ ⌊ (nums[i]−1) / y ⌋
 *    i
 */
var minimumSize = function (nums, maxOperations) {
  let left = 1, right = _.max(nums);
  let result = 0;
  while (left <= right) {
    const y = Math.floor((left + right) / 2);
    let ops = 0;
    for (const x of nums) {
      ops += Math.floor((x - 1) / y);
    }
    if (ops <= maxOperations) {
      result = y;
      right = y - 1;
    } else {
      left = y + 1;
    }
  }
  return result;
};






console.log(minimumSize([9], 2)); // 3
console.log(minimumSize([2, 4, 8, 2], 4)); // 2
console.log(minimumSize([7, 17], 2)); // 7
