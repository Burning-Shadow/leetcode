/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 
 * 1. 快慢指针找寻中点
 * 2. 递归执行以上过程
 */
const sortedListToBST = (head) => {
  if (!head) return null;
  let slow = head;
  let fast = head;
  let preSlow;

  while (fast && fast.next) {
    preSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  const root = new TreeNode(slow.val);

  if (preSlow != null) {
    preSlow.next = null;
    root.left = sortedListToBST(head);
  }
  root.right = sortedListToBST(slow.next);
  return root;
};
