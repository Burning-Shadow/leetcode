/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function Node(val){
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
  let h = new Node(0) // 创建一个新的头结点，方便删除头结点
  h.next = head
  let start = h
  let end = h
  let count = 1
  while (end && end.next) {
    end = end.next
    if (count > n) {
      start = start.next
    }
    count++
  }
  start.next = start.next.next
  return h.next
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); // [1,2,3,5]
console.log(removeNthFromEnd([1], 1)); // []
console.log(removeNthFromEnd([1, 2], 1)); // [1]