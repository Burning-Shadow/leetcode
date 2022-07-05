/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result;
  const visited = []; // 已访问节点
  const map = new Map(); // 建立 Map 存储父节点

  const dfs = (node, parent) => {
    if (!node) return;
    map.set(node.val, parent.val);
    dfs(node.left, node);
    dfs(node.right, node);
  }

  dfs(root, null);

  const find = (node) => {
    let currNode = node;
    while (currNode) {
      if (!visited.includes(currNode.val)) {
        visited.push(currNode.val);
        currNode = map.get(currNode.val);
      } else {
        result = currNode.val;
        return;
      }
    }
  }

  find(p);
  find(q);

  return result;
};

// var lowestCommonAncestor = function (root, p, q) {
//   let result;
//   const dfs = (root, p, q) => {
//     if (root === null) return false;

//     const lson = dfs(root.left, p, q);
//     const rson = dfs(root.right, p, q);

//     if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) result = root;
//     return lson || rson || (root.val === p.val || root.val === q.val);
//   }
//   dfs(root, p, q);
//   return result;
// };