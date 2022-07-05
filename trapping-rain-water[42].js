/**
 * @param {number[]} height
 * @return {number}
 * 
 * 正反两个方向遍历【双指针】
 */
var trap = function (height) {
  const len = height.length;
  if (!len) return 0;

  let leftMax = 0,
    rightMax = 0,
    left = 0,
    right = len - 1,
    result = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] < height[right]) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9