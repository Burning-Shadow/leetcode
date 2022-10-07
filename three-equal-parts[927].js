/**
 * @param {number[]} arr
 * @return {number[]}
 * 
 * 1. 若三部分二进制结果相同，那么三个部分中 1 的数量一定相等
 * 2. 两根指针确认前导位置至 1 的位置。第三根指针则是移动指针，确认末尾及后续数前置指针
 */
var threeEqualParts = function (arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum % 3 !== 0) return [-1, -1];
  if (sum === 0) return [0, 2];

  const partial = Math.floor(sum / 3);
  let first = 0, second = 0, third = 0, cur = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      if (cur === 0) {
        first = i;
      } else if (cur === partial) {
        second = i;
      } else if (cur === 2 * partial) {
        third = i;
      }
      cur++;
    }
  }

  let len = arr.length - third;
  if (first + len <= second && second + len <= third) {
    let i = 0;
    while (third + i < arr.length) {
      if (arr[first + i] !== arr[second + i] || arr[first + i] !== arr[third + i]) {
        return [-1, -1];
      }
      i++;
    }
    return [first + len - 1, second + len];
  }
  return [-1, -1];
};


console.log(threeEqualParts([1, 0, 1, 0, 1])); // [0,3]
console.log(threeEqualParts([1, 1, 0, 1, 1])); // [-1,-1]
console.log(threeEqualParts([1, 1, 0, 0, 1])); // [0,2]