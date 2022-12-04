/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 * 
 * dp【01背包】
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  const x = _.min(baseCosts);
  if (x >= target) {
    return x;
  }
  const can = new Array(target + 1).fill(0);
  let result = 2 * target - x;
  for (const b of baseCosts) {
    if (b <= target) {
      can[b] = true;
    } else {
      result = Math.min(result, b);
    }
  }
  for (const t of toppingCosts) {
    for (let count = 0; count < 2; ++count) {
      for (let i = target; i > 0; --i) {
        if (can[i] && i + t > target) {
          result = Math.min(result, i + t);
        }
        if (i - t > 0) {
          can[i] = can[i] | can[i - t];
        }
      }
    }
  }
  for (let i = 0; i <= result - target; ++i) {
    if (can[target - i]) {
      return target - i;
    }
  }
  return result;
};


/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 * 
 * backtrace
 */
var closestCost = function (baseCosts, toppingCosts, target) {
  let result = _.min(baseCosts);
  const dfs = (toppingCosts, p, curCost, target) => {
    if (Math.abs(result - target) < curCost - target) {
      return;
    } else if (Math.abs(result - target) >= Math.abs(curCost - target)) {
      if (Math.abs(result - target) > Math.abs(curCost - target)) {
        result = curCost;
      } else {
        result = Math.min(result, curCost);
      }
    }
    if (p === toppingCosts.length) {
      return;
    }
    dfs(toppingCosts, p + 1, curCost + toppingCosts[p] * 2, target);
    dfs(toppingCosts, p + 1, curCost + toppingCosts[p], target);
    dfs(toppingCosts, p + 1, curCost, target);
  };
  for (const b of baseCosts) {
    dfs(toppingCosts, 0, b, target);
  }
  return result;
};






console.log(closestCost([1, 7], [3, 4], 10)); // 10
console.log(closestCost([2, 3], [4, 5, 100], 18)); // 17
console.log(closestCost([3, 10], [2, 5], 9)); // 8
console.log(closestCost([10], [1], 1)); // 10
