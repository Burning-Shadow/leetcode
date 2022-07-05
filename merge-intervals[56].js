/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let curr = intervals[0];
  const result = [];

  for (const interval of intervals) {
    if (curr[1] >= interval[0]) curr[1] = Math.max(curr[1], interval[1]);
    else {
      result.push(curr);
      curr = interval;
    }
  }
  result.push(curr);
  return result;
};

console.log(merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
])); // [[1,6],[8,10],[15,18]]
console.log(merge([
  [1, 4],
  [4, 5]
])); // [[1,5]]