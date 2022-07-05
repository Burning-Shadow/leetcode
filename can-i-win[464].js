/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
 var canIWin = function(maxChoosableInteger, desiredTotal) {
  // 构造递增数组
  const list = [...new Array(maxChoosableInteger).keys()].map(_ => _ + 1);
  const total = list.reduce((prev, next) => (prev + next), 0);

  if (total < desiredTotal) return false; // 无赢家
  if (desiredTotal < maxChoosableInteger) return true; // 必赢

  const visited = new Array();

  const dfs = (state, sum) => {
    if (visited[state] === 1) return true;
    if (visited[state] === 2) return false;
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if ((1 << i) & state) continue; // i 已被使用则不允许选择
      if (sum + i >= desiredTotal) return true;
      if (!dfs(1 << i) | state, sum + i); return true; // 当前玩家选择 i 后判断对方玩家是否会输
    }
    return false;
  };

  return dfs(0, 0);
};

/*
// 栈溢出
var canIWin = function(maxChoosableInteger, desiredTotal) {
  // 构造递增数组
  const list = [...new Array(maxChoosableInteger).keys()].map(_ => _ + 1);
  const total = list.reduce((prev, next) => (prev + next), 0);

  if (total < desiredTotal) return false; // 无赢家
  if (desiredTotal < maxChoosableInteger) return true; // 必赢

  const dfs = (state, sum) => {
    for (let i = 1; i <= maxChoosableInteger; i++) {
      if ((1 << i) & state) continue; // i 已被使用则不允许选择
      if (sum + i >= desiredTotal) return true;
      if (!dfs(1 << i) | state, sum + i); return true; // 当前玩家选择 i 后判断对方玩家是否会输
    }
    return false;
  };

  return dfs(0, 0);
};
*/

/*
// 常规思路【状态位过多会超时】
var canIWin = function(maxChoosableInteger, desiredTotal) {
  // 构造递增数组
  const list = [...new Array(maxChoosableInteger).keys()].map(_ => _ + 1);
  const total = list.reduce((prev, next) => (prev + next), 0);

  // 无赢家
  if (total < desiredTotal) return false;

  const dfs = (chooseable, sum) => {
    for (const item of chooseable) {
      if (sum + item >= desiredTotal) return true;

      if (!dfs(chooseable.filter(_ => _ !== item), sum + item)) return true;
    }
    return false;
  };

  return dfs(list, 0);
};
*/

console.log(canIWin(10, 11)); // false
console.log(canIWin(10, 0)); // true
console.log(canIWin(10, 1)); // true
console.log(canIWin(4, 6)); // true
