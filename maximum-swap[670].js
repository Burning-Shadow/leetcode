/**
 * @param {number} num
 * @return {number}
 * 
 * 单调栈
 * 保证数组尽可能单调递减。当出现例外时将该例外放入已入栈部分的合适位置，继续保证该栈单调递减
 */
 var maximumSwap = function (num) {
  const chars = String(num).split('');
  const stack = [];
  const len = chars.length;

  for (let i = len - 1; i >= 0; i--) {
    if (stack.length === 0 || chars[i] > chars[stack[stack.length - 1]])
      stack.push(i);
  }

  for (let i = 0; i < len; i++) {
    if (chars[i] < chars[stack[stack.length - 1]]) {
      const temp = chars[i];
      chars[i] = chars[stack[stack.length - 1]];
      chars[stack[stack.length - 1]] = temp;
      return chars.join('');
    } else if (i === stack[stack.length - 1]) {
      stack.pop();
    }
  }

  return num;
};