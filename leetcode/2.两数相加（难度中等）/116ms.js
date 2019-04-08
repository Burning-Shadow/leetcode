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