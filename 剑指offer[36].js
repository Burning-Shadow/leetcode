/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  const list = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    list.push(node.val);
    inorder(node.right);
  };
  inorder(root);

  let currValue = list.shift();
  const head = new Node(currValue);
  let currNode = head;

  while (list.length) {
    const value = list.shift();
    const nextNode = new Node(value);
    currNode.right = nextNode;
    nextNode.left = currNode;
    currNode = currNode.right;
  }

  currNode.right = head;
  head.left = currNode;

  return head;
};