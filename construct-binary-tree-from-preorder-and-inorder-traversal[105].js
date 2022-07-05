/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  const dfs = (preorder, inorder) => {
    const len = preorder.length;
    if (!len) return null;
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    if (len === 1) return root;

    const rootIndex = inorder.indexOf(rootValue);

    const leftInorderTree = inorder.slice(0, rootIndex);
    const rightInorderTree = inorder.slice(rootIndex + 1);

    const leftPreOrderTree = preorder.slice(1, leftInorderTree.length + 1);
    const rightPreOrderTree = preorder.slice(leftInorderTree.length + 1);

    root.left = dfs(leftPreOrderTree, leftInorderTree);
    root.right = dfs(rightPreOrderTree, rightInorderTree);
    return root;
  };

  return dfs(preorder, inorder);
};