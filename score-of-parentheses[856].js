/**
 * @param {string} s
 * @return {number}
 * 
 * 栈
 */
var scoreOfParentheses = function (s) {
  const stack = [0];
  for (const char of s) {
    if (char === '(') {
      stack.push(0);
    } else {
      let v = stack.pop();
      let top = stack.pop() + Math.max(2 * v, 1);
      stack.push(top);
    }
  }
  return stack[0];
};

/**
 * @param {string} s
 * @return {number}
 * 
 * 分治
 * 左括号记为 1，右括号记为 -1。若 s 的某个非空前缀对应的和 bal = 0，则该前缀就是一个平衡括号字符串
 */
var scoreOfParentheses = function (s) {
  if (s.length === 2) return 1;
  let bal = 0,
    n = s.length,
    len = 0;
  for (let i = 0; i < n; i++) {
    bal += (s[i] === '(' ? 1 : -1);
    if (bal === 0) {
      len = i + 1;
      break;
    }
  }
  if (len === n) {
    return 2 * scoreOfParentheses(s.slice(1, n - 1));
  } else {
    return scoreOfParentheses(s.slice(0, len)) + scoreOfParentheses(s.slice(len));
  }
}

/**
 * @param {string} s
 * @return {number}
 * 
 * 计算最终分数和
 * 深度记为 bal
 */
var scoreOfParentheses = function (s) {
  let bal = 0,
    n = s.length,
    result = 0; // 深度

  for (let i = 0; i < n; i++) {
    bal += (s[i] == '(' ? 1 : -1);
    if (s[i] == ')' && s[i - 1] === '(') {
      result += 1 << bal;
    }
  }
  return result;
};


console.log(scoreOfParentheses("()")); // 1
console.log(scoreOfParentheses("(())")); // 2
console.log(scoreOfParentheses("()()")); // 2
console.log(scoreOfParentheses("(()(()))")); // 6