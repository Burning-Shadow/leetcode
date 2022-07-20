/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const citys = new Array(n).fill(0);
  const isConcat = new Array(n).fill(0).map(_ => new Array(n).fill(false));

  isConcat.forEach(item => item.fill(0));
  // citys统计每个城市的连接道路, isConcat[i][j]来判断i、j城市是否相连
  for (let i = 0; i < roads.length; i++) {
    let [a, b] = roads[i];
    citys[a]++;
    citys[b]++;
    isConcat[a][b] = 1;
    isConcat[b][a] = 1;
  }
  let result = 0;
  console.log('isConcat = ', isConcat);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      result = Math.max(result, citys[i] + citys[j] - isConcat[i][j]);
    }
  }
  return result;
};

console.log(maximalNetworkRank(4, [[0, 1], [0, 3], [1, 2], [1, 3]])); // 4
console.log(maximalNetworkRank(5, [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [2, 4]])); // 5
console.log(maximalNetworkRank(8, [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]])); // 5