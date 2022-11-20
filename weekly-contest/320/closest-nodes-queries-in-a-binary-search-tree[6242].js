/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 * 
 * 超时
 */
var closestNodes = function (root, queries) {
  const len = queries.length;
  const result = new Array(len).fill(0).map(_ => new Array(2).fill(-1));

  const updateResult = (currValue) => {
    for (let i = 0; i < len; i++) {
      const item = queries[i];
      if (item === currValue) result[i] = [currValue, currValue];
      else if (item > currValue) result[i][0] = Math.max(result[i][0], currValue);
      else {
        if (result[i][1] === -1) result[i][1] = currValue;
        else result[i][1] = Math.min(result[i][1], currValue);
      }
    }
  };

  const dfs = (node) => {
    const value = node.val;
    updateResult(value);
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  };

  dfs(root);

  return result;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[][]}
 * 
 * 中序遍历 + 二分查找
 */
var closestNodes = function (root, queries) {
  const list = [];
  const result = [];
  const dfs = root => {
    if (!root) return;

    dfs(root.left);
    list.push(root.val);
    dfs(root.right);
  }
  dfs(root);

  const len = list.length;

  for (const query of queries) {
    const item = [-1, -1];
    let left = 0;
    let right = len - 1;
    let equal = false;
    while (left <= right) {
      const mid = Math.trunc((left + right) / 2);
      if (list[mid] === query) {
        item[0] = query;
        item[1] = query;
        equal = true;
        break;
      } else if (list[mid] < query) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (!equal) {
      item[0] = list[left - 1] ?? -1;
      item[1] = list[left] ?? -1;
    }
    result.push(item);
  }
  return result;
};

