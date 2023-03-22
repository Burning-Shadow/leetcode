/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 * 
 * 经典 dp
 */
var bestTeamScore = function (scores, ages) {
  const n = scores.length;
  const people = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; ++i) {
    people[i] = [scores[i], ages[i]];
  }
  people.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  const dp = new Array(n).fill(0);
  let result = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (people[j][1] <= people[i][1]) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i] += people[i][0];
    result = Math.max(result, dp[i]);
  }
  return result;
};




console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])); // 34
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])); // 16
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])); // 6
