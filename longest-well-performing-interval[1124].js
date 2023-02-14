/**
 * @param {number[]} hours
 * @return {number}
 * 
 * 贪心
 */
var longestWPI = function (hours) {
  const n = hours.length;
  const s = new Array(n + 1).fill(0);
  const stk = [0];
  for (let i = 1; i <= n; i++) {
    s[i] = s[i - 1] + (hours[i - 1] > 8 ? 1 : -1);
    if (s[stk[stk.length - 1]] > s[i]) {
      stk.push(i);
    }
  }

  let result = 0;
  for (let r = n; r >= 1; r--) {
    while (stk.length && s[stk[stk.length - 1]] < s[r]) {
      result = Math.max(result, r - stk.pop());
    }
  }
  return result;
};


/**
 * @param {number[]} hours
 * @return {number}
 * 
 * hashMap
 */
var longestWPI = function (hours) {
  const n = hours.length;
  const map = new Map();
  let s = 0, result = 0;
  for (let i = 0; i < n; i++) {
    s += hours[i] > 8 ? 1 : -1;
    if (s > 0) {
      result = Math.max(result, i + 1);
    } else {
      if (map.has(s - 1)) {
        result = Math.max(result, i - map.get(s - 1));
      }
    }
    if (!map.has(s)) {
      map.set(s, i);
    }
  }
  return result;
};


/**
 * @param {number[]} hours
 * @return {number}
 * 
 * 前缀和
 */
function longestWPI(hours) {
  const sums = hours.map(() => 0);
  const map = new Map();

  let result = 0;
  for (let i = 0; i < hours.length; i++) {
    sums[i] = (sums[i - 1] || 0) + (hours[i] > 8 ? 1 : -1);
    if (sums[i] > 0) result = Math.max(result, i + 1);
    else {
      if (map.has(sums[i] - 1)) result = Math.max(result, i - map.get(sums[i] - 1));
    }

    if (!map.has(sums[i])) map.set(sums[i], i);
  }

  return result;
};





console.log(longestWPI([9, 9, 6, 0, 6, 6, 9])); // 3
console.log(longestWPI([6, 6, 6])); // 0
