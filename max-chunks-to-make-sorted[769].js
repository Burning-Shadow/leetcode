/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 贪心【一次遍历】
 * 若已遍历过的数中的最大值 max 与当前遍历到的下标 i 相等，说明可以进行一次分割，累加答案
 */
var maxChunksToSorted = function (arr) {
  let result = 0, max = 0;
  for (let i = 0; i < arr.length; ++i) {
    max = Math.max(max, arr[i]);
    if (i == max) {
      ++result;
    }
  }
  return result;
};

/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 单调栈
 * 从左到右，每个分块都有一个最大值，并且这些分块的最大值呈单调递增。且 arr 中无重复数字，故可以用一个栈来存储这些分块的最大值。最后得到栈的大小。
 */
var maxChunksToSorted = function (arr) {
  const stack = [];
  for (const item of arr) {
    if (stack.length === 0 || item > stack[stack.length - 1]) stack.push(item);
    else {
      const max = stack.pop();
      while (stack.length && stack[stack.length - 1] > item) stack.pop();
      stack.push(max);
    }
  }

  return stack.length;
}

console.log(maxChunksToSorted([4, 3, 2, 1, 0])); // 1
console.log(maxChunksToSorted([1, 0, 2, 3, 4])); // 4