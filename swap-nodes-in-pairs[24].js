/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
  const prev = { next: head };
  let node = prev;

  while (node && node.next && node.next.next) {
    const temp = node.next;
    node.next = node.next.next;
    const next = node.next.next;
    temp.next = next;
    node.next.next = temp;
    node = temp;
  }

  return prev.next;
};