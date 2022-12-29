/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const map = new Map();
  for (const i of nums1) {
    map.set(i, 1);
  }
  for (const i of nums2) {
    map.set(i, (map.get(i) || 0) | 2);
  }
  for (const i of nums3) {
    map.set(i, (map.get(i) || 0) | 4);
  }
  const res = [];
  for (const [k, v] of map.entries()) {
    if ((v & (v - 1)) !== 0) {
      res.push(k);
    }
  }
  return res;
};









console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3])); // [3,2]
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2])); // [2,3,1]
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5])); // []
