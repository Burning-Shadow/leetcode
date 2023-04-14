/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  let adj = new Array(n).fill(null).map(() => []);
  for (let path of paths) {
    adj[path[0] - 1].push(path[1] - 1);
    adj[path[1] - 1].push(path[0] - 1);
  }
  let ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let colored = new Array(5).fill(false);
    for (let vertex of adj[i]) {
      colored[ans[vertex]] = true;
    }
    for (let j = 1; j <= 4; j++) {
      if (!colored[j]) {
        ans[i] = j;
        break;
      }
    }
  }
  return ans;
};




console.log(gardenNoAdj(3, [[1,2],[2,3],[3,1]])); // [1,2,3]
console.log(gardenNoAdj(4, [[1,2],[3,4]])); // [1,2,1,2]
console.log(gardenNoAdj(4, [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]])); // [1,2,3,4]
