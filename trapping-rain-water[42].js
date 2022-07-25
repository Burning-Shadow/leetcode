// /**
//  * @param {number[]} height
//  * @return {number}
//  * 
//  * 正反两个方向遍历【双指针】
//  * 空间复杂度低版本 dp
//  */
// var trap = function (height) {
//   const len = height.length;
//   if (!len) return 0;

//   let leftMax = 0,
//     rightMax = 0,
//     left = 0,
//     right = len - 1,
//     result = 0;

//   while (left < right) {
//     leftMax = Math.max(leftMax, height[left]);
//     rightMax = Math.max(rightMax, height[right]);

//     if (height[left] < height[right]) {
//       result += leftMax - height[left];
//       left++;
//     } else {
//       result += rightMax - height[right];
//       right--;
//     }
//   }

//   return result;
// };

/**
 * @param {number[]} height
 * @return {number}
 * 
 * 单调栈【单调递减】
 */
var trap = function (heights) {
  const len = heights.length;
  if (!len) return 0;
  const stack = [];
  let result = 0;

  for (let i = 0; i < len; i++) {
    while (stack.length && heights[stack[stack.length - 1]] < heights[i]) {
      const top = stack.pop();
      if (!stack.length) break;
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(heights[left], heights[i]) - heights[top];
      console.log(`i = ${i}, top = ${top}, left = ${left}, currWidth = ${currWidth}, currHeight = ${currHeight}`);
      result += currWidth * currHeight;
    }
    stack.push(i);
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9