/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = new Map();
  for (const v of items1) {
    const [value, weight] = v;
    map.set(value, (map.get(value) || 0) + weight);
  }
  for (const v of items2) {
    const [value, weight] = v;
    map.set(value, (map.get(value) || 0) + weight);
  }

  const result = [];
  for (const [k, v] of map.entries()) {
    const pair = [];
    pair.push(k);
    pair.push(v);
    result.push(pair);
  }
  result.sort((a, b) => a[0] - b[0]);
  return result;
};





console.log(mergeSimilarItems([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]])); // [[1,6],[3,9],[4,5]]
console.log(mergeSimilarItems([[1, 1], [3, 2], [2, 3]], [[2, 1], [3, 2], [1, 3]])); // [[1,4],[2,4],[3,4]]
console.log(mergeSimilarItems([[1, 3], [2, 2]], [[7, 1], [2, 2], [1, 4]])); // [[1,7],[2,4],[7,1]]
