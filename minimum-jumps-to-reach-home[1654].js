/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 * 
 * 限制最大6000
 * dfs
 * 每次可以尝试：
 *   向前
 *   向后（上次是向后的话，这次不可尝试向后）
 * 记录如果是向右跳过的点就不要在尝试了，放到 forbidden 中
 * 把 forbidden 转换为 object 来判断是否不可跳，数组判断太慢了
 */
var minimumJumps = function (forbidden, a, b, x) {
  let ans = Infinity;
  let map = {};
  forbidden.forEach(v => {
    map[v] = true;
  })
  const dfs = (posi, step, right) => {
    if (posi < 0 || posi > 6000 || map[posi]) return;
    if (right) map[posi] = true;
    if (posi === x) return ans = Math.min(ans, step);
    dfs(posi + a, step + 1, true);
    if (right) dfs(posi - b, step + 1, false);
  }
  dfs(0, 0, true);
  return ans === Infinity ? -1 : ans;
};

/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
  if (x == 0) return 0
  let q = [[0, 1]]//从0开始，1向右
  let res = 0
  let max = Math.max(...forbidden) + x + a + b // 结束上限
  let v = [3]
  for (let f of forbidden) v[f] = 3 // ob11 高位标记已搜索左 低位标记已搜索右
  while (q.length) {
    ++res
    let L = q.length
    for (let i = 0; i < L; ++i) {
      let p = q.shift()
      let right = p[0] + a
      if (right == x) return res
      if ((v[right] & 1) == 0 && right <= max) { //右搜
        v[right] = v[right] | 1
        q.push([right, 1])
      }
      if (p[1] == 0) continue
      let left = p[0] - b
      if (left == x) return res
      if (left > 0 && (v[left] & 2) == 0) { //左搜
        v[left] = v[left] | 2
        q.push([left, 0])
      }
    }
  }
  return -1
};

console.log(minimumJumps([14, 4, 18, 1, 15], 3, 15, 9)); // 3
console.log(minimumJumps([8, 3, 16, 6, 12, 20], 15, 13, 11)); // -1
console.log(minimumJumps([1, 6, 2, 14, 5, 17, 4], 16, 9, 7)); // 2