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
var reverseEvenLengthGroups = function (head) {
  let prev = { next: head };
  let cnt = 1;
  while (prev.next) {
    let temp = prev;
    let count = 0;
    while (temp.next && count < cnt) {
      count++;
      temp = temp.next;
    }

    if ((count % 2) === 0) {
      revert(prev, count);
    }

    let num = cnt
    while (num-- && prev.next) {
      prev = prev.next;
    }
    cnt++;
  }
  return head;
};

function revert (prevNode, count) {
  let cur = prevNode.next;
  let tail = cur;
  let prev = null;
  while (count-- && cur) {
    const { next } = cur;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  prevNode.next = prev;
  tail.next = cur;
}
