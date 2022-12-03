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
 * 
 * 分奇偶情况讨论
 * 奇: 快指针指向末尾那么慢指针一定指向中间
 * 偶: 快指针指向空那么慢指针一定指向中间
 */
var middleNode = function (head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};