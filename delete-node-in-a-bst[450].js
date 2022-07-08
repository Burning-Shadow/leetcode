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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function (root, key) {
	if (!root) return null;
	if (root.val > key) {
		root.left = deleteNode(root.left, key);
		return root;
	}
	if (root.val < key) {
		root.right = deleteNode(root.right, key);
		return root;
	}
	if (root.val === key) {
		if (!root.left && !root.right) return null;
		if (!root.right) return root.left;
		if (!root.left) return root.right;

		let successor = root.right;
		while (successor.left) successor = successor.left;
		root.right = deleteNode(root.right, successor.val);
		successor.right = root.right;
		successor.left = root.left;
		return successor;
	}
	return root;
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
 * @param {number} key
 * @return {TreeNode}
 */
//  var deleteNode = function(root, key) {
//   const list = [];
//   const inOrder = (node) => {
//     if (!node) return;
//     inOrder(node.left);
//     list.push(node.val);
//     inOrder(node.right);
//   };
//   inOrder(root);

//   const idx = list.indexOf(key);
//   if (idx === -1) return root;
//   list.splice(idx, 1);

//   console.log(list);
//   return generateTree(list);
// };

// const generateTree = (list) => {
//   const len = list.length;
//   if (!len) return null;
//   const nodeIndex = len >> 1;
//   const left = generateTree(list.slice(0, nodeIndex));
//   const right = generateTree(list.slice(nodeIndex + 1));
//   return new TreeNode(list[nodeIndex], left, right);
// };
