/**
 * @param {number[]} postorder
 * @return {boolean}
 * 
 * https://leetcode.cn/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/
 */
 var verifyPostorder = function (postorder) {
  if (postorder.length <= 2) return true;

  const root = postorder[postorder.length - 1];
  const idx = postorder.findIndex((item) => item > root);
  const left = postorder.slice(0, idx);
  const right = postorder.slice(idx, -1);
  if (Math.min(root, ...right) !== root) return false

  return verifyPostorder(left) && verifyPostorder(right)
};
