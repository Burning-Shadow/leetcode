/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const len = nums.length;
  let result = [...nums];

  for (let i = 0; i < len; i++) {
    if (result[i] === result[i + 1]) {
      result[i] *= 2;
      result[i + 1] = 0;
    }
  }

  result = result.filter(_ => _);
  return result.concat(new Array(len - result.length).fill(0));
};

console.log(applyOperations([1, 2, 2, 1, 1, 0])); // [1,4,2,0,0,0]
console.log(applyOperations([0, 1])); // [1,0]
