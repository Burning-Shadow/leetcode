/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 * 
 * dp 即为前 i 份工作最大报酬
 */
var jobScheduling = function (startTime, endTime, profit) {
  const len = startTime.length;
  const jobs = new Array(len).fill(0).map((_, i) => [startTime[i], endTime[i], profit[i]]);
  jobs.sort((a, b) => a[1] - b[1]);
  const dp = new Array(len + 1).fill(0);
  for (let i = 1; i <= len; i++) {
    const k = binarySearch(jobs, i - 1, jobs[i - 1][0]);
    dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);
  }
  return dp[len];
}

const binarySearch = (jobs, right, target) => {
  let left = 0;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (jobs[mid][1] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};


console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])); // 120
console.log(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])); // 150
console.log(jobScheduling([1, 1, 1], [2, 3, 4], [5, 6, 4])); // 6
