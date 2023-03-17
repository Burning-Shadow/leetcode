/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const result = [];
  const queriesLen = queries.length;
  const numsLen = nums.length;
  for (let i = 0; i < queriesLen; i++) {
    let sum = 0;
    for (let j = 0; j < numsLen; j++) {
      sum += nums[j];
      if (sum > queries[i]) {
        result[i] = j;
        break;
      }
    }
    if (sum <= queries[i]) result[i] = numsLen;
  }
  return result;
};




console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])); // [2,3,4]
console.log(answerQueries([2, 3, 4, 5], [1])); // [0]
