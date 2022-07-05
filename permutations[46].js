/**
 * @param {number[]} nums
 * @return {number[][]}
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

// console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// console.log(permute([0, 1])); // [[0,1],[1,0]]
// console.log(permute([1])); // [[1]]
console.log(permute([0, -1, 1])); // [[0,-1,1],[0,1,-1],[-1,0,1],[-1,1,0],[1,0,-1],[1,-1,0]]