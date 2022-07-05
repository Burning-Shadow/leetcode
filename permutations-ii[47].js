/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const len = nums.length;
  const vis = new Array(nums.length).fill(false);

  const dfs = (idx, perm) => {
    if (idx === len) {
      result.push(perm.slice());
      return;
    }
    for (let i = 0; i < len; ++i) {
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) continue;

      perm.push(nums[i]);
      vis[i] = true;
      dfs(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  }

  dfs(0, []);

  return result;
};

console.log(permuteUnique([1, 1, 2])); // [[1,1,2], [1,2,1], [2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]