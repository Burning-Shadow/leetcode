/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * 
 * bfs 层序遍历，但 leetcode 莫名其妙给我拦了一道
 */
var connect = function (root) {
  const queue = root;
  let curr = root;
  while (queue.length) {
    const len = queue.length;
    const list = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (i === len - 1) {
        curr.next = null;
        curr = list[0];
      } else {
        curr.next = node;
        curr = curr.next;
      }

      if (node.left) list.push(node.left);
      if (node.right) list.push(node.right);
    }
    queue.push(...list);
  }
  return root;
};

/**
 * @param {Node} root
 * @return {Node}
 * 
 * 官方解法【最低空间复杂度】
 */
let last = null, nextStart = null;
const handle = (p) => {
  if (last) last.next = p;
  if (!nextStart) nextStart = p;
  last = p;
}
var connect = function (root) {
  if (!root) return null;
  let start = root;
  while (start) {
    last = null;
    nextStart = null;
    for (let p = start; p; p = p.next) {
      if (p.left) handle(p.left);
      if (p.right) handle(p.right);
    }
    start = nextStart;
  }
  return root;
};
