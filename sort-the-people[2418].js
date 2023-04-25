/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const n = names.length;
  const indices = Array.from({ length: n }, (_, i) => i);
  indices.sort((a, b) => heights[b] - heights[a]);
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = names[indices[i]];
  }
  return res;
};



console.log(sortPeople(["Mary","John","Emma"], [180,165,170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150])); // ["Bob","Alice","Bob"]
