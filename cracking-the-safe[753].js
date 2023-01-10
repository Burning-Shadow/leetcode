/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 
 * 欧拉通路
 * https://leetcode.cn/problems/cracking-the-safe/solutions/393529/po-jie-bao-xian-xiang-by-leetcode-solution/
 * 这题应该算是个数学题，具体还是参考评论区，我没看懂
 */
var crackSafe = function (n, k) {
  highest = Math.pow(10, n - 1);
  let ans = '';
  const seen = new Set();
  const dfs = (node) => {
    for (let x = 0; x < k; ++x) {
      let nei = node * 10 + x;
      if (!seen.has(nei)) {
        seen.add(nei);
        dfs(nei % highest);
        ans += x;
      }
    }
  };

  dfs(0);
  for (let i = 1; i < n; i++) {
    ans += '0';
  }
  return ans;
}





console.log(crackSafe(1, 2)); // "01"
console.log(crackSafe(2, 2)); // "00110"
