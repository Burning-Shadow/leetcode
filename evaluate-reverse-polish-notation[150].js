/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const symbols = ['+', '-', '*', '/'];

  for (const token of tokens) {
    if (!symbols.includes(token)) stack.push(token);
    else {
      const a = stack.pop();
      const b = stack.pop();
      const value = eval(`${b} ${token} ${a}`);
      stack.push(value > 0 ? Math.floor(value) : Math.ceil(value));
    }
  }

  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // 22