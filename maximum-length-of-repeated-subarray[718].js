/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * dp[i][j] 表示自 nums1[i] 和 nums2[j] 起始比较的数组最大的公共子串长度
 * 时间复杂度 O(m * n)
 * 空间复杂度 O(m * n)
 */
var findLength = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const dp = new Array(len1 + 1).fill(0).map(_ => new Array(len2 + 1).fill(0));

  let result = 0;

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0;
      result = Math.max(dp[i][j], result);
    }
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * dp 降维优化
 * 由于二维数组只在对角线上有作用，故可以简化为一位数组
 * https://leetcode.cn/problems/maximum-length-of-repeated-subarray/solution/zhe-yao-jie-shi-ken-ding-jiu-dong-liao-by-hyj8/
 */
const findLength = (A, B) => {
  const m = A.length;
  const n = B.length;
  const dp = new Array(n + 1).fill(0);
  let res = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = n; j >= 1; j--) {
      if (A[i - 1] == B[j - 1]) dp[j] = dp[j - 1] + 1;
      else dp[j] = 0;
      res = Math.max(dp[j], res);
    }
  }
  return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 * 滑窗
 * 想象两把错开的尺子
 */
const findLength = (nums1, nums2) => {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let ret = 0;

  const maxLength = (A, B, addA, addB, len) => {
    let result = 0, k = 0;
    for (let i = 0; i < len; i++) {
      if (A[addA + i] == B[addB + i]) k++;
      else k = 0;
      result = Math.max(result, k);
    }
    return result;
  }

  for (let i = 0; i < len1; i++) {
    const len = Math.min(len2, len1 - i);
    let maxlen = maxLength(nums1, nums2, i, 0, len);
    ret = Math.max(ret, maxlen);
  }
  for (let i = 0; i < len2; i++) {
    const len = Math.min(len1, len2 - i);
    let maxlen = maxLength(nums1, nums2, 0, i, len);
    ret = Math.max(ret, maxlen);
  }

  return ret;
}

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])); // 3
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])); // 5