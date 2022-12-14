/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
 var distanceLimitedPathsExist = function (n, edgeList, queries) {
  edgeList.sort((a, b) => a[2] - b[2]);
  const index = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    index[i] = i;
  }
  index.sort((a, b) => queries[a][2] - queries[b][2]);

  const uf = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    uf[i] = i;
  }
  const result = new Array(queries.length).fill(0);
  let k = 0;
  for (let i of index) {
    while (k < edgeList.length && edgeList[k][2] < queries[i][2]) {
      merge(uf, edgeList[k][0], edgeList[k][1]);
      k++;
    }
    result[i] = find(uf, queries[i][0]) == find(uf, queries[i][1]);
  }
  // return result;
}

const find = (uf, x) => {
  if (uf[x] === x) {
    return x;
  }
  return uf[x] = find(uf, uf[x]);
}

const merge = (uf, x, y) => {
  x = find(uf, x);
  y = find(uf, y);
  uf[y] = x;
};




console.log(distanceLimitedPathsExist(3, [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], [[0,1,2],[0,2,5]])); // [false,true]
console.log(distanceLimitedPathsExist(5, [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], [[0,4,14],[1,4,13]])); // [true,false]
