/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * Ps: 前置条件:
 *   设 head 到环入口距离为 a
 *   入口到相遇点距离为 b
 *   相遇点 b 回到入口距离为 c
 * 
 * 快慢指针在环内相遇时慢指针必定没有走完一圈:
 *  我们不妨最坏的假设，慢指针进入环时快指针刚好在其前面。那么快指针需要走 (b + c - 1) 步才能与慢指针相遇
 *  所以无论什么情况，快指针走的距离均不会超过 (b + c - 1) 步，故慢指针行走的距离必定小于环长
 * 
 * 2 (a + b) = a + b + k(b + c)
 * a + b + a + b = a + b + b + c + (k - 1)(b + c)
 * a - c = (k - 1)(b + c)
 * 
 * 故相交于 b 点后，slow 和 head 同时出发，终归会在
 */
var detectCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      /**
       * slow 从相遇点出发，head 同时进发
       * 走 c 步之后 slow 刚好在入口
       * 而 head 到入口的距离也刚好是环长的倍数
       * 再向后走【由于速度相同】二者必然会在入口相遇
       */
      while (slow !== head) {
        slow = slow.next;
        head = head.next;
      }
      return head;
    }
  }

  return null;
};