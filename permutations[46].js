/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * dfs
 */
var permute = function (nums) {
  const result = [];

  const dfs = (arr, currNums) => {
    if (!currNums.length) {
      result.push(arr);
      return;
    }
    for (let i = 0; i < currNums.length; i++) {
      const newStr = arr.concat([currNums[i]]);
      dfs(newStr, currNums.filter(_ => _ !== currNums[i]));
    }
  };

  dfs([], nums);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * backtrace
 */
 var permute = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const len = nums.length;
  const used = new Array(len).fill(false);

  const backtrace = (arr, idx) => {
    if (idx === len) {
      result.push(arr.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;

      arr.push(nums[i]);
      used[i] = true;
      backtrace(arr, idx + 1);
      used[i] = false;
      arr.pop();
    }
  };

  backtrace([], 0);
  return result;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
console.log(permute([0, -1, 1])); // [[0,-1,1],[0,1,-1],[-1,0,1],[-1,1,0],[1,0,-1],[1,-1,0]]