/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const len = nums.length;
  const vis = new Array(nums.length).fill(false);

  const backtrace = (idx, perm) => {
    if (idx === len) {
      result.push(perm.slice());
      return;
    }
    for (let i = 0; i < len; ++i) {
      // vis[i]表示当前元素已经在路径中，跳过；第二段用来剪枝，当前数组和前一位相同并且前一位没有被用过
      if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) continue;

      perm.push(nums[i]);
      vis[i] = true;
      backtrace(idx + 1, perm);
      vis[i] = false;
      perm.pop();
    }
  }

  backtrace(0, []);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length === 1) return [nums];
  var results = [];
  nums.forEach(function (v, i) {
    if (nums.indexOf(v) === i) {
      var subs = [...nums];
      subs.splice(i, 1);
      results = results.concat(permuteUnique(subs).map(function (v2) {
        return [v, ...v2];
      }));
    }
  });
  return results;
};

console.log(permuteUnique([1, 1, 2])); // [[1,1,2], [1,2,1], [2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permuteUnique([3, 3, 0, 3])); // [[3,3,0,3],[3,3,3,0],[3,0,3,3],[0,3,3,3]]