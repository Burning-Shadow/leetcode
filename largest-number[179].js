/**
 * @param {number[]} nums
 * @return {string}
 * 
 * 自大到小排序后拼接
 */
var largestNumber = function (nums) {
  if (!nums.filter(_ => _).length) return '0';
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  return nums.join('');
};

console.log(largestNumber([10, 2])); // '210'
console.log(largestNumber([3, 30, 34, 5, 9])); // '9534330'