/**
 * 这类型的题往往均为三维数组，前两维用于记录猫鼠位置，第三维则用来记录可能的状态【此处往往伴随状态压缩，亦或直接为一个状态数组】
*/

/**
 * @param {number[][]} graph
 * @return {number}
 * 
 * dp
 * 此题由于数据规模过大，不满足时间复杂度要求，故暂不使用 dp，仅提供思路
 */
var catMouseGame = function (graph) {
  const MOUSE_WIN = 1;
  const CAT_WIN = 2;
  const DRAW = 0;

  const len = graph.length;
  const dp = new Array(len).fill(0).map(_ => new Array(len).fill(0).map(_ => new Array(2 * len * (len - 1)).fill(-1)));

  const getResult = (mouse, cat, turns) => {
    if (turns === 2 * len * (len - 1)) return DRAW;
    let res = dp[mouse][cat][turns];
    if (res !== -1) return res;

    if (mouse === 0) res = MOUSE_WIN;
    else if (cat === mouse) res = CAT_WIN;
    else res = getNextResult(mouse, cat, turns);

    dp[mouse][cat][turns] = res;
    return res;
  }

  const getNextResult = (mouse, cat, turns) => {
    const curMove = turns % 2 == 0 ? mouse : cat;
    const defaultRes = curMove != mouse ? MOUSE_WIN : CAT_WIN;
    let res = defaultRes;
    for (const next of graph[curMove]) {
      if (curMove === cat && next === 0) continue;

      const nextMouse = curMove === mouse ? next : mouse;
      const nextCat = curMove == cat ? next : cat;
      const nextRes = getResult(nextMouse, nextCat, turns + 1)
      if (nextRes !== defaultRes) {
        res = nextRes;
        if (res !== DRAW) break;
      }
    }
    return res;
  }

  return getResult(1, 2, 0);
};

/**
 * @param {number[][]} graph
 * @return {number}
 * 
 * 拓扑排序
 */
var catMouseGame = function (graph) {
  const MOUSE_TURN = 0, CAT_TURN = 1;
  const DRAW = 0, MOUSE_WIN = 1, CAT_WIN = 2;
  const len = graph.length;
  degrees = new Array(len).fill(0).map(() => new Array(len).fill(0).map(() => new Array(2).fill(0)));
  results = new Array(len).fill(0).map(() => new Array(len).fill(0).map(() => new Array(2).fill(0)));
  const getPrevStates = (mouse, cat, turn, graph) => {
    const prevStates = [];
    const prevTurn = turn == MOUSE_TURN ? CAT_TURN : MOUSE_TURN;
    if (prevTurn === MOUSE_TURN) {
      for (const prev of graph[mouse]) {
        prevStates.push([prev, cat, prevTurn]);
      }
    } else {
      for (const prev of graph[cat]) {
        if (prev != 0) {
          prevStates.push([mouse, prev, prevTurn]);
        }
      }
    }
    return prevStates;
  }
  const queue = [];
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len; j++) {
      degrees[i][j][MOUSE_TURN] = graph[i].length;
      degrees[i][j][CAT_TURN] = graph[j].length;
    }
  }
  for (const node of graph[0]) {
    for (let i = 0; i < len; i++) {
      degrees[i][node][CAT_TURN]--;
    }
  }
  for (let j = 1; j < len; j++) {
    results[0][j][MOUSE_TURN] = MOUSE_WIN;
    results[0][j][CAT_TURN] = MOUSE_WIN;
    queue.push([0, j, MOUSE_TURN]);
    queue.push([0, j, CAT_TURN]);
  }
  for (let i = 1; i < len; i++) {
    results[i][i][MOUSE_TURN] = CAT_WIN;
    results[i][i][CAT_TURN] = CAT_WIN;
    queue.push([i, i, MOUSE_TURN]);
    queue.push([i, i, CAT_TURN]);
  }
  while (queue.length) {
    const state = queue.shift();
    const mouse = state[0], cat = state[1], turn = state[2];
    const result = results[mouse][cat][turn];
    const prevStates = getPrevStates(mouse, cat, turn, graph);
    for (const prevState of prevStates) {
      let prevMouse = prevState[0], prevCat = prevState[1], prevTurn = prevState[2];
      if (results[prevMouse][prevCat][prevTurn] === DRAW) {
        const canWin = (result === MOUSE_WIN && prevTurn === MOUSE_TURN) || (result === CAT_WIN && prevTurn === CAT_TURN);
        if (canWin) {
          results[prevMouse][prevCat][prevTurn] = result;
          queue.push([prevMouse, prevCat, prevTurn]);
        } else {
          degrees[prevMouse][prevCat][prevTurn]--;
          if (degrees[prevMouse][prevCat][prevTurn] == 0) {
            const loseResult = prevTurn === MOUSE_TURN ? CAT_WIN : MOUSE_WIN;
            results[prevMouse][prevCat][prevTurn] = loseResult;
            queue.push([prevMouse, prevCat, prevTurn]);
          }
        }
      }
    }
  }

  return results[1][2][MOUSE_TURN];
};





console.log(catMouseGame([[2, 5], [3], [0, 4, 5], [1, 4, 5], [2, 3], [0, 2, 3]])); // 0
console.log(catMouseGame([[1, 3], [0], [3], [0, 2]])); // 2
