/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const len = candidates.length;

  const dfs = (i, sum, path) => {
    if (sum > target) return;
    if (sum == target) result.push([...path]);

    for (i; i < len; i++) {
      sum += candidates[i];
      path.push(candidates[i]);
      dfs(i + 1, sum, path);
      sum -= candidates[i];
      path.pop();
      while (candidates[i + 1] == candidates[i]) i++;
    }
  }

  dfs(0, 0, []);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6], [1,2,5], [1,7], [2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1,2,2], [5]]