/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 回溯法模板
 * void backtracking(参数) {
 *   if (终止条件) {
 *     存放结果;
 *     return;
 *   }
 *   for (选择: 本层集合中元素（ 树中节点孩子的数量就是集合的大小）) {
 *     处理节点;
 *     backtracking(路径, 选择列表); // 递归
 *     回溯 撤销处理结果
 *   }
 * }
 */
var subsets = function (nums) {
  let result = []
  let path = []

  function backtracking(startIndex) {
    result.push(path.slice())
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
  backtracking(0)
  return result
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]

