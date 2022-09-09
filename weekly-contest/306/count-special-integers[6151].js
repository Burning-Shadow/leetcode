/**
 * @param {number} n
 * @return {number}
 * 
 * https://leetcode.cn/contest/weekly-contest-306
 * 记忆化搜索
 */
var countSpecialNumbers = function (n) {
  const s = String(n);
  const len = s.length;
  const memo = new Array(len + 1).fill(0).map(() => new Array((1 << 11) - 1).fill(-1));

  /**
   * @param {number} i        索引. 第 i 位开始
   * @param {number} mask     长度为 10 的二进制数字，表示 10 个数字是否用过
   * @param {number} isLimit  当前位是否有限制，如果有限制，只能填 [0 ~ s[i]]，否则可以填 [0 ~ 9]
   * @param {number} isNum    i 位之前是否是数字，如果是的话，那么当前位可以从 0 开始填，否则只能从 1 开始填
   * @return {number}
   * 
   * 记忆化搜索
   */
  const dfs = (i, mask, isLimit, isNum) => {
    if (i === len) return isNum ? 1 : 0;

    if (!isLimit && isNum && memo[i][mask] !== -1) return memo[i][mask];

    let res = 0;
    if (!isNum) res += dfs(i + 1, mask, false, false);

    const up = isLimit ? (s[i] * 1) : 9;
    const down = isNum ? 0 : 1;
    for (let j = down; j <= up; j++) {
      if ((1 << j) & mask) continue;
      res += dfs(i + 1, mask | (1 << j), isLimit && (j === up), true);
    }

    if (!isLimit && isNum) memo[i][mask] = res;
    return res;
  }

  return dfs(0, 0, true, false);
};


console.log(countSpecialNumbers(20)); // 19
console.log(countSpecialNumbers(5)); // 5
console.log(countSpecialNumbers(135)); // 110