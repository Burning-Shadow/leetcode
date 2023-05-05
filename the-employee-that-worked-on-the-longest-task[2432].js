/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let ans = logs[0][0], maxCost = logs[0][1];
  for (let i = 1; i < logs.length; i++) {
    const idx = logs[i][0];
    const cost = logs[i][1] - logs[i - 1][1];
    if (cost > maxCost || (cost === maxCost && idx < ans)) {
      ans = idx;
      maxCost = cost;
    }
  }
  return ans;
};




console.log(hardestWorker(10, [[0,3],[2,5],[0,9],[1,15]])); // 1
console.log(hardestWorker(26, [[1,1],[3,7],[2,12],[7,17]])); // 3
console.log(hardestWorker(2, [[0,10],[1,20]])); // 0
