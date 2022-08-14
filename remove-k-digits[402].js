/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 
 * 单调栈
 * 
 * 单调递增栈，利用波谷剔除栈中的波峰，留下波谷；
 * 单调递减栈，利用波峰剔除栈中的波谷，留下波峰。
 */
var removeKdigits = function (num, k) {
  const stack = [];
  for (const digit of num) {
    while (stack.length > 0 && stack[stack.length - 1] > digit && k) {
      stack.pop();
      k -= 1;
    }
    stack.push(digit);
  }

  for (; k > 0; --k) stack.pop();

  let answer = "";
  let isLeadingZero = true;
  for (const digit of stack) {
    if (isLeadingZero && digit === '0') continue;

    isLeadingZero = false;
    answer += digit;
  }
  return answer === "" ? "0" : answer;
};

console.log(removeKdigits("1432219", 3)); // '1219'
console.log(removeKdigits("10200", 1)); // '200'
console.log(removeKdigits("10", 2)); // '0'