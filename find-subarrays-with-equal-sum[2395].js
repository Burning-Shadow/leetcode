/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const n = nums.length;
  const seen = new Set();
  for (let i = 0; i < n - 1; ++i) {
    let sum = nums[i] + nums[i + 1];
    if (seen.has(sum)) {
      return true;
    }
    seen.add(sum);
  }
  return false;
};



console.log(findSubarrays([4,2,4])); // true
console.log(findSubarrays([1,2,3,4,5])); // false
console.log(findSubarrays([0,0,0])); // true
