/**
 * @param {number} n
 * @return {string[]}
 * 
 * dfs
 */
var generateParenthesis = function (n) {
  // 第 (i - 1) 组括号要么在 第 i 组的内部，要么在第 i 组的右边
  const result = [];

  const dfs = (leftCnt, rightCnt, str) => {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (leftCnt > 0) dfs(leftCnt - 1, rightCnt, str.concat("("));
    if (leftCnt < rightCnt) dfs(leftCnt, rightCnt - 1, str.concat(")"));
  };

  dfs(n, n, '');
  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 * 
 * 回溯
 */
var generateParenthesis = function (n) {
  const result = [];

  const backTrace = (leftCnt, rightCnt, track) => {
    if (leftCnt < 0 || rightCnt < 0 || rightCnt < leftCnt) return; // 数量小于 0 或 左括号数量大于右数量则非法
    if (!leftCnt && !rightCnt) {
      result.push(track.join(''));
      return;
    }

    track.push('(');
    backTrace(leftCnt - 1, rightCnt, [...track]);
    track.pop();

    track.push(')');
    backTrace(leftCnt, rightCnt - 1, [...track]);
    track.pop();
  };

  backTrace(n, n, []);
  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 * 
 * 暴力解【不用扩展符也算是回溯】
 */
const generateParenthesis = (n) => {
  const result = [];

  const generateAll = (current) => {
    if (2 * n === current.length) {
      if (valid(current)) result.push(current.join(''));
      return;
    } else {
      generateAll([...current, '(']);
      generateAll([...current, ')']);
    }
  };

  const valid = (current) => {
    let balance = 0;
    for (const c of current) {
      if (c === '(') balance += 1;
      else balance -= 1;
      if (balance < 0) return false;
    }
    return 0 === balance;
  };

  generateAll([]);
  return result;
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
