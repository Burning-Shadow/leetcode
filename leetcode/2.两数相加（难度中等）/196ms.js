/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    head = result
    preAdd = 0
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (preAdd)
        preAdd = parseInt(sum / 10)
        head.next = new ListNode(sum % 10)
        head = head.next
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (preAdd > 0) {
        head.next = new ListNode(1)
    }
    return result.next
};