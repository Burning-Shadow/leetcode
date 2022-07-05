/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const len = getLen(head)
  // k 为 1 或长度 < k 则翻转无意义直接返回
  if (k === 1 || len < k) return head;

  let prev = { next: head }, cnt = k;

  let tail = head, hair = null;
  for (let i = 0; i < Math.floor(len / k); i++) {
    let tail = head;
    hair = revert(prev, cnt);
  }

  while (cnt && prev.next) {
    revert(prev, cnt);
  }

  
};

function getLen (head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}

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
