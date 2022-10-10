/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * dp
 * 既然需要交换相同位置的数，那么必须保证以下两点
 * 1. nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1];
 * 2. nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]; 
 */
var minSwap = function (nums1, nums2) {
  const len = nums1.length;
  let a = 0, b = 1;

  for (let i = 1; i < len; i++) {
    let at = a, bt = b;
    a = b = len;
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      a = Math.min(a, at);
      b = Math.min(b, bt + 1);
    }
    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      a = Math.min(a, bt);
      b = Math.min(b, at + 1);
    }
  }

  return Math.min(a, b);
};


console.log(minSwap([1, 3, 5, 4], [1, 2, 3, 7])); // 1
console.log(minSwap([0, 3, 5, 8, 9], [2, 1, 4, 6, 9])); // 1