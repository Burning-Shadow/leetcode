/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (target, combine, idx) => {
    if (idx === candidates.length) return;
    if (target === 0) {
      result.push(combine);
      return;
    }
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
  };

  dfs(target, [], 0);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)); // []