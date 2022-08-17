/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const list = [];

  const postOrder = (root, list) => {
    if (!root) {
      return;
    }
    postOrder(root.left, list);
    postOrder(root.right, list);
    list.push(root.val);
  }

  postOrder(root, list);
  const str = list.join(',');
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) {
    return null;
  }
  let arr = data.split(',');
  const length = arr.length;
  const stack = [];
  for (let i = 0; i < length; i++) {
    stack.push(parseInt(arr[i]));
  }

  const construct = (lower, upper, stack) => {
    if (stack.length === 0 || stack[stack.length - 1] < lower || stack[stack.length - 1] > upper) {
      return null;
    }
    const val = stack.pop();
    const root = new TreeNode(val);
    root.right = construct(val, upper, stack);
    root.left = construct(lower, val, stack);
    return root;
  }

  return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */