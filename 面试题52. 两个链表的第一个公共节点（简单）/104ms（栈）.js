/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var arrA = [],
    arrB = [],
    i = 0;

  if (!(headB && headA)) {
    return null;
  }

  while (headA) {
    arrA.push(headA);
    headA = headA.next;
  }

  while (headB) {
    arrB.push(headB);
    headB = headB.next;
  }

  arrA.reverse();
  arrB.reverse();

  if (arrA.length === 1 || arrB.length === 1) {
    if (arrA[0].val === arrB[0].val) {
      return arrB[0];
    }
    return null;
  }

  while (arrA[i] && arrB[i]) {
    if (arrA[i] === arrB[i]) {
      i++;
    } else {
      return arrA[i - 1];
    }
  }

  if (i === arrA.length) {
    return arrA[i - 1];
  } else if (i === arrB.length) {
    return arrB[i - 1];
  } else {
    return null;
  }
};
