/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  items.sort((a, b) => a[0] - b[0]);
  let res = queries.slice().fill(0);
  let max = [];
  let maxVal = -1;
  for (let [a, b] of items) {
    // price, beauty
    maxVal = Math.max(maxVal, b);
    max.push(maxVal);
  }
  console.log('max = ', max);
  for (let i = 0; i < queries.length; i++) {
    let l = 0,
      r = items.length - 1;
    while (l < r) {
      let m = Math.ceil((l + r) / 2);
      if (items[m][0] <= queries[i]) l = m;
      else r = m - 1;
    }
    if (items[l][0] <= queries[i]) res[i] = max[l];
  }
  return res;
};

console.log(maximumBeauty([[1,2],[3,2],[2,4],[5,6],[3,5]], [1,2,3,4,5,6])); // [2,4,5,5,6,6]
console.log(maximumBeauty([[1,2],[1,2],[1,3],[1,4]], [1])); // [4]
console.log(maximumBeauty([[10,1000]], [5])); // 0
