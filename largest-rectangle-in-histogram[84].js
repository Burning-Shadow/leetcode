/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length;
  if (len === 1) return heights[0];
  let result = 0;
  let width = 0;

  for (let i = 0; i < len; i++) {
    let j = i + 1;
    while (j < len && heights[j] >= heights[i]) j++;
    width = j - i;
    result = Math.max(result, (j - i) * heights[i]);
  }

  return result;
};

/**
 * @param {number[]} heights
 * @return {number}
 * 
 * 单调栈
 * 遍历数组，遇到比当前栈顶大的元素就压入栈(压入的是索引)，否则就取出栈顶元素进行计算：以当前栈顶元素为高度的最大矩形面积
 */
var largestRectangleArea = function (heights) {
  let i = 0, maxArea = 0;
  const stack = [];

  for (let i = 0, len = heights.length; i <= len; i++) {
    while (stack.length > 0 && (heights[i] < heights[stack[stack.length - 1]] || i === len)) {
      const height = heights[stack.pop()];
      const width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
      // console.log(`height = ${height}, width = ${width}`);

      maxArea = Math.max(maxArea, width * height);
    }
    stack.push(i);
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
console.log(largestRectangleArea([1])); // 1
console.log(largestRectangleArea([1, 1])); // 2
console.log(largestRectangleArea([0, 9])); // 9
