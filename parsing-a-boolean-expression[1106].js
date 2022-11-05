/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const stack = [];

  for (const char of expression) {
    if (char === ',') continue;
    else if (char !== ')') stack.push(char);
    else {
      let trues = 0,
        falses = 0;

      while (stack[stack.length - 1] !== '(') {
        const value = stack.pop();
        if (value === 't') trues += 1;
        else falses += 1;
      }
      stack.pop(); // 移除 '('
      const op = stack.pop();
      switch (op) {
        case '!':
          stack.push(falses === 1 ? 't' : 'f'); // ! 运算符只能对最近的一个 char 生效，故判断 t 的数量是否为 1 即可
          break;
        case '&':
          stack.push(falses === 0 ? 't' : 'f'); // & ———— 有 0 则 0
          break;
        case '|':
          stack.push(trues > 0 ? 't' : 'f'); // ｜ ———— 有 1 则 1
          break;
        default:
          break;
      }
    }
  }

  return stack.pop() === 't';
};

console.log(parseBoolExpr("!(f)"));
console.log(parseBoolExpr("|(f,t)"));
console.log(parseBoolExpr("&(t,f)"));
console.log(parseBoolExpr("|(&(t,f,t),!(t))"));
