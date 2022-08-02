/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;//虚拟头节点

  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) pre = pre.next;

  let rightNode = pre;
  //rightNode遍历到right的位置
  for (let i = 0; i < right - left + 1; i++) rightNode = rightNode.next;

  let leftNode = pre.next;//保存leftNode
  let curr = rightNode.next;//保存rightNode.next

  //切断left到right的子链
  pre.next = null;
  rightNode.next = null;

  reverseLinkedList(leftNode);

  // 反向连接
  pre.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};

const reverseLinkedList = (head) => {
  let pre = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}
