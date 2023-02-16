/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * hashMap 保存奇偶行，偶为 false 奇为 true
 */
var numberOfPairs = function (nums) {
  const cnt = new Map();
  let result = 0;
  for (const num of nums) {
    cnt.set(num, !(cnt.get(num) || false));
    if (!cnt.get(num)) {
      result++;
    }
  }
  return [result, nums.length - 2 * result];
};






console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // [3,1]
console.log(numberOfPairs([1, 1])); // [1,0]
console.log(numberOfPairs([0])); // [0,1]
