/**
 * @param {string} boxes
 * @return {number[]}
 * 
 * 这题爪哇缪斯的思路不错
 * https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/2001791/-by-muse-77-ilaz/
 */
var minOperations = function (boxes) {
  const n = boxes.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    let sm = 0;
    for (let j = 0; j < n; j++) {
      if (boxes[j] === '1') {
        sm += Math.abs(j - i);
      }
    }
    result.push(sm);
  }
  return result;
};


/**
 * @param {string} boxes
 * @return {number[]}
 * 
 * 这题爪哇缪斯的思路不错
 * https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/2001791/-by-muse-77-ilaz/
 */
var minOperations = function (boxes) {
  let left = boxes[0].charCodeAt() - '0'.charCodeAt(), right = 0, operations = 0;
  const n = boxes.length;
  for (let i = 1; i < n; i++) {
    if (boxes[i] === '1') {
      right++;
      operations += i;
    }
  }
  const result = new Array(n).fill(0);
  result[0] = operations;
  for (let i = 1; i < n; i++) {
    operations += left - right;
    if (boxes[i] === '1') {
      left++;
      right--;
    }
    result[i] = operations;
  }
  return result;
}




console.log(minOperations("110")); // [1,1,3]
console.log(minOperations("001011")); // [11,8,5,4,3,4]
