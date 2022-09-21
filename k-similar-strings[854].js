/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 * 
 * bfs
 */
var kSimilarity = function (s1, s2) {
  const n = s1.length;
  const queue = [];
  const visit = new Set();
  queue.push([s1, 0]);
  visit.add(s1);
  let step = 0;
  while (queue.length) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      let [cur, pos] = queue.shift();
      if (cur === s2) {
        return step;
      }
      while (pos < n && cur[pos] === s2[pos]) {
        pos++;
      }
      for (let j = pos + 1; j < n; j++) {
        if (s2[j] === cur[j]) {
          continue;
        }
        if (s2[pos] === cur[j]) {
          const next = swap(cur, pos, j);
          if (!visit.has(next)) {
            visit.add(next);
            queue.push([next, pos + 1]);
          }
        }
      }
    }
    step++;
  }
  return step;
}

const swap = (cur, i, j) => {
  const arr = [...cur];
  const c = arr[i];
  arr[i] = arr[j];
  arr[j] = c;
  return arr.join('');
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 * 
 * dfs
 */
var kSimilarity = function (s1, s2) {
  let str1 = '';
  let str2 = '';
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      str1 += s1[i];
      str2 += s2[i];
    }
  }
  if (str1.length === 0) {
    return 0;
  }
  let ans = str1.length - 1;

  const dfs = (pos, cost, len, str1, str2) => {
    if (cost > ans) {
      return;
    }
    while (pos < str1.length && str1[pos] === str2[pos]) {
      pos++;
    }
    if (pos === str1.length) {
      ans = Math.min(ans, cost);
      return;
    }
    /* 当前状态的交换次数下限大于等于当前的最小交换次数 */
    if (cost + minSwap(str1, str2, pos) >= ans) {
      return;
    }
    for (let i = pos + 1; i < str1.length; i++) {
      if (str1[i] === str2[pos]) {
        const str1Next = swap(str1, i, pos);
        dfs(pos + 1, cost + 1, len, str1Next, str2);
      }
    }
  }

  const minSwap = (s1, s2, pos) => {
    let tot = 0;
    for (let i = pos; i < s1.length; i++) {
      tot += s1[i] !== s2[i] ? 1 : 0;
    }
    return Math.floor((tot + 1) / 2);
  }

  const swap = (cur, i, j) => {
    const arr = [...cur];
    const c = arr[i];
    arr[i] = arr[j];
    arr[j] = c;
    return arr.join('');
  }

  dfs(0, 0, str1.length, str1, str2);
  return ans;
}

console.log(kSimilarity());
console.log(kSimilarity());