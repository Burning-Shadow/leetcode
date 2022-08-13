/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 
 * 1. 快慢指针寻找中间断开节点 & 断开
 * 2. 翻转后半段链表
 * 3. 交错合并
 * 
 * Zoom二面面试题
 */
 function reorderList(head) {
  if (!head) return null;

  let fast = head;
  let slow = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = slow.next;
  slow.next = null;

  let fakeHead = new ListNode();
  while (fast) {
    let tmp = fast.next;
    fast.next = fakeHead.next;
    fakeHead.next = fast;
    fast = tmp;
  }

  fast = fakeHead.next;
  slow = head;
  while (slow) {
    let tmp1 = slow.next;
    slow.next = fast;
    //fast为null时，tmp2就是null
    let tmp2 = fast && fast.next;
    fast && (fast.next = tmp1);
    slow = tmp1;
    fast = tmp2;
  }
  return;
};
