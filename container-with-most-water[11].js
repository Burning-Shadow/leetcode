/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let result = 0;
  let left = 0, right = height.length - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const waterLevel = Math.min(leftHeight, rightHeight);
    console.log('waterLevel = ', waterLevel);
    result = Math.max((right - left) * waterLevel, result);

    if (leftHeight < rightHeight) left++;
    else right--;
  }

  return result;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
