// https://leetcode.cn/contest/weekly-contest-305

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let cnt = 0;

  for (let i = 0; i < len - 2; i++) {
    const first = nums[i];
    const second = first + diff;
    const third = first + diff * 2;

    const idx2 = nums.indexOf(second);
    const idx3 = nums.indexOf(third);

    if (i !== idx2 && idx2 !== idx3 && idx2 !== -1 && idx3 !== -1) cnt++;
  }

  return cnt;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2