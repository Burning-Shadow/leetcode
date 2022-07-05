/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
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

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
