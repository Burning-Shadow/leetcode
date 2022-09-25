/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 * 
 *   思路：按照节点的值，从小到大合并，记录每个分块中最大节点值的数量，当与最大值和我相同的联通分快合并的时候，
 *        对结果的贡献累加 size[block1max] * size[block2max]
 */
var numberOfGoodPaths = function (vals, edges) {
  const n = vals.length;
  const fa = [...new Array(n).keys()];
  const size = new Array(n).fill(1);
  let result = 0;

  const find = (x) => {
    if (x !== fa[x]) {
      fa[x] = find(fa[x]);
    }
    return fa[x];
  }

  const g = new Array(n).fill(0).map(() => []);
  for (const [a, b] of edges) {
    g[a].push(b);
    g[b].push(a);
  }

  const indexes = [...new Array(n).keys()];
  indexes.sort((a, b) => vals[a] - vals[b]);

  for (const x of indexes) {
    const val = vals[x];
    const fx = find(x);
    for (const y of g[x]) {
      const fy = find(y);
      if (fx === fy || vals[fy] > val) continue;
      if (vals[fy] === val) {
        result += size[fy] * size[fx];
        size[fx] += size[fy];
      }
      fa[fy] = fx;
    }
  }

  return result + n;
};


console.log(numberOfGoodPaths());
console.log(numberOfGoodPaths());
console.log(numberOfGoodPaths());