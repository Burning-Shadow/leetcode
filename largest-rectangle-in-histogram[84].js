/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length
  if (len === 1) return heights[0];
  let result = 0;
  let width = 0;

  for (let i = 0; i < len && width = 0; i++) {
    let j = i + 1;
    while (j < len && heights[j] >= heights[i]) j++;
    width = j - i;
    result = Math.max(result, (j - i) * heights[i]);
  }

  return result;
};

// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
// console.log(largestRectangleArea([2, 4])); // 4
// console.log(largestRectangleArea([1])); // 1
// console.log(largestRectangleArea([1, 1])); // 2
console.log(largestRectangleArea([0, 9])); // 9
