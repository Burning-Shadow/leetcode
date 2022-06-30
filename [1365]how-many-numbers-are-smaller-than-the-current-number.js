/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 排序后计数，而后将排序后的数组对应数字与排序前的数组对应起来后返回
 *  */
var smallerNumbersThanCurrent = function (nums) {
  let j = [],
    result = [],
    the_nums = nums.concat();

  let nums_sort = nums.sort((a, b) => {
    return a - b;
  });

  result[nums_sort[0]] = 0;

  for (let i = 0; i < nums_sort.length; i++) {
    while (nums_sort[i] == nums_sort[i + 1] && nums_sort[i + 1]) {
      i++;
    }
    if (nums_sort[i + 1]) result[nums_sort[i + 1]] = i + 1;
  }

  for (let i = 0; i < the_nums.length; i++) {
    j[i] = result[the_nums[i]];
  }
  return j;
};
