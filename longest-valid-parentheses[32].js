/**
 * @param {string} s
 * @return {number}
 * 
 * 始终保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」
 */
// var longestValidParentheses = function (s) {
//   const stack = [-1];
//   const len = s.length;
//   if (len < 1) return 0;
//   let max = 0,
//     i = 0;

//   while (i < len) {
//     const value = s[i];
//     if (value === '(') stack.push(i);
//     else {
//       stack.pop();

//       if (stack.length === 0) stack.push(i);
//       else max = Math.max(max, i - stack[stack.length - 1]);
//     }
//     i++;
//   }

//   return max;
// };

/**
 * @param {string} s
 * @return {number}
 * 
 * 始终保持栈底元素为当前已经遍历过的元素中「最后一个没有被匹配的右括号的下标」
 */
var longestValidParentheses = function (s) {
  const len = s.length;
  let max = 0,
    i = 0,
    leftSide = 0,
    rightSide = 0;

  while (i < len) {
    if (s[i] === '(') leftSide++;
    else rightSide++;
    if (leftSide === rightSide) {
      max = Math.max(rightSide * 2, max);
    } else if (leftSide < rightSide) {
      leftSide = 0;
      rightSide = 0;
    }
    i++;
  }

  i = len - 1;
  leftSide = rightSide = 0;

  while (i > -1) {
    if (s[i] === '(') leftSide++;
    else rightSide++;

    if (leftSide === rightSide) {
      max = Math.max(leftSide * 2, max);
    } else if (leftSide > rightSide) {
      leftSide = 0;
      rightSide = 0;
    }
    i--;
  }

  return max;
};

console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("")); // 0