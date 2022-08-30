/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];
      if (sum > queries[i]) {
        result[i] = j;
        break;
      }
    }
    if (sum <= queries[i]) result[i] = nums.length;
  }
  return result;
};

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 * 
 * 正序排序 + 前缀和 + 二分查找右边界
 */
var answerQueries = function (nums, queries) {
  const n = nums.length;
  const m = queries.length;
  const result = new Array(m);
  const pre = new Array(n).fill(0);

  nums.sort((a, b) => a - b);
  pre[-1] = 0;
  for (let i = 0; i < n; i++) {
    pre[i] = pre[i - 1] + nums[i];
  }

  for (let i = 0; i < m; i++) {
    const target = queries[i];
    let l = 0, r = n;
    while (l < r) {
      let mid = l + ((r - l) >> 1);
      if (pre[mid] <= target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    result[i] = l;
  }

  return result;
};


console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])); // [2,3,4]
console.log(answerQueries([2, 3, 4, 5], [1])); // [0]