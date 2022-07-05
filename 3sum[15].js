/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return [];

  const result = [];

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1,
      right = len - 1;
    const value = nums[i];
    if (value > 0) break;
    if (value === nums[i - 1]) continue;
    while (left < right) {
      const leftValue = nums[left];
      const rightValue = nums[right];

      const sum = leftValue + rightValue + value;
      if (sum === 0 && !result.includes(JSON.stringify([value, leftValue, rightValue])))
        result.push(JSON.stringify([value, leftValue, rightValue]));
      if (sum < 0) left++;
      else right--;
    }
  }

  return result.map(_ => JSON.parse(_));
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])) // []
console.log(threeSum([0])) // []