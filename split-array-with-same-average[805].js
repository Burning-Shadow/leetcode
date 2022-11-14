/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * dp
 */
var splitArraySameAverage = function (nums) {
  if (nums.length === 1) return false;
  const len = nums.length,
    m = Math.floor(len / 2);
  let sum = 0;
  for (const num of nums) sum += num;

  let isPossible = false;
  for (let i = 1; i <= m; i++) {
    if (sum * i % len === 0) {
      isPossible = true;
      break;
    }
  }
  if (!isPossible) {
    return false;
  }
  const dp = new Array(m + 1).fill(0).map(() => new Set());
  dp[0].add(0);
  for (const num of nums) {
    for (let i = m; i >= 1; i--) {
      for (const x of dp[i - 1]) {
        let curr = x + num;
        if (curr * len === sum * i) {
          return true;
        }
        dp[i].add(curr);
      }
    }
  }

  return false;
};




console.log(splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8])); // true
console.log(splitArraySameAverage([3, 1])); // false
