### 题目

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**示例：**

```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

### 196ms

```javascript
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
    while(l1 || l2){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0 )+ (preAdd)
        preAdd = parseInt(sum/10)
        head.next = new ListNode(sum % 10)
        head = head.next
        if(l1){
            l1 = l1.next
        }
        if(l2){
            l2 = l2.next
        }
    }
    if(preAdd > 0){
        head.next = new ListNode(1)
    }
    return result.next
};
```

### 116ms

```javascript
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
let addTwoNumbers = function(l1, l2) {
    let arr1 = [],
        arr2 = [];
    while (l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        arr2.push(l2.val);
        l2 = l2.next;
    }
    let len1 = arr1.length;
    let len2 = arr2.length;
    if (len1 < len2) {
        arr1.length = len2;
        arr1.fill(0, len1, len2);
    }
    if (len1 > len2) {
        arr2.length = len1;
        arr2.fill(0, len2, len1);
    }
    let arr3 = [],
        temp = 0;
    for (let i = 0; i < arr1.length; i++) {
        let add = arr1[i] + arr2[i] + temp;
        if (add >= 10) {
            temp = 1;
        } else {
            temp = 0;
        }
        arr3[i] = add % 10;
    }
    if (temp === 1) {
        arr3.push(1);
    }
    let result = null;
    let tempNode = null;
    for (let j of arr3) {
        let listNode = {
            val: j,
            next: null
        };
        if (!result) {
            result = listNode;
            tempNode = result;
        } else {
            tempNode.next = listNode;
            tempNode = listNode;
        }
    }
    return result;
};
```

显然，将仿链表结构变化为数组，处理完毕后再转回去速度更快一些

### 116ms

```javascript
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
    let curEle = result = new ListNode(0)
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = sum > 9 ? 1 : 0
        curEle.next = new ListNode((sum) % 10)
        curEle = curEle.next
    }
    return result.next
};
```

