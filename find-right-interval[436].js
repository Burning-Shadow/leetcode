/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  const len = intervals.length;
  if (len === 1) return [-1];
  const result = [];

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (i !== j && intervals[i][1] <= intervals[j][0]) {
        result.push(j);
        return;
      }
      result.push(-1);
    }
  }
};

console.log(findRightInterval([[1,2]]));
console.log(findRightInterval([[3,4],[2,3],[1,2]]));
console.log(findRightInterval([[1,4],[2,3],[3,4]]));
