/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  const len = arr.length;

  const index = Math.floor(len / 2);
  if (len % 2) return arr[index];
  return (arr[index] + arr[index - 1]) / 2;
};
