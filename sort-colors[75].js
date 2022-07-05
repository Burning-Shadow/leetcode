/**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
 var sortColors = function (nums) {
  if (!nums.length) return [];
  // p: 前指针、q: 后指针【二者用于交换】、flag: flag之前均为有序数组
  const len = nums.length;
  let p0 = i = 0, p2 = len - 1;

  while (i <= p2) {
    while (i < p2 && nums[i] === 2) {
      const cache = nums[p2];
      nums[p2] = nums[i];
      nums[i] = cache;

      p2--;
    }
    if (nums[i] === 0) {
      const cache = nums[p0];
      nums[p0] = nums[i];
      nums[i] = cache;

      p0++;
    }
  }

  return nums;
};

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
