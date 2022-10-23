/**
 * @param {number[]} nums
 * @param {number[]} costs
 * @return {number}
 * 
 * 中位数贪心
 * 该情况选取中位数无疑是最优解
 * https://leetcode.cn/problems/minimum-cost-to-make-array-equal/solution/by-endlesscheng-i10r/
 */
// var minCost = function (nums, costs) {
//   const map = nums.map((item, idx) => ({ num: item, cost: costs[idx] }));
//   map.sort((a, b) => a.cost - b.cost);

//   const mid = (costs.reduce((total, curr) => total + curr, 0)) >> 1;

//   let s = 0;
//   const len = map.length;
//   for (let i = 0; i < len; i++) {
//     s += map[i].cost;
//     const number = map[i].num;
//     // 找到中位数
//     if (s >= mid) {
//       let sum = 0
//       for (let j = 0; j < i; j++) {
//         const diff = Math.abs(map[j].num - number);
//         const { cost } = map[j];
//         sum += (diff * cost);
//       }
//       return sum;
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 * 
 * 前缀和
 * https://leetcode.cn/problems/minimum-cost-to-make-array-equal/solution/qian-zhui-he-by-terencezhang-pcdi/
 */
var minCost = function (nums, cost) {
  let hash = new Map(), min = Infinity;
  nums.forEach((v, i) => {
    hash.set(v, (hash.get(v) || 0) + cost[i]);
  });
  let a = [...hash].sort((a, b) => a[0] - b[0]);
  let sum1 = new Array(a.length).fill(0);
  let sum2 = new Array(a.length).fill(0);
  for (let i = 1; i < a.length; i++) sum1[i] = sum1[i - 1] + a[i - 1][1];
  for (let i = a.length - 2; i >= 0; i--) sum2[i] = sum2[i + 1] + a[i + 1][1];
  let dp1 = new Array(a.length).fill(0);
  let dp2 = new Array(a.length).fill(0);
  for (let i = 1; i < a.length; i++)
    dp1[i] = (a[i][0] - a[i - 1][0]) * sum1[i] + dp1[i - 1];
  for (let i = a.length - 2; i >= 0; i--)
    dp2[i] = (a[i + 1][0] - a[i][0]) * sum2[i] + dp2[i + 1];
  for (let i = 0; i < a.length; i++)
    min = Math.min(min, dp1[i] + dp2[i]);
  return min;
};


console.log(minCost([1, 3, 5, 2], [2, 3, 1, 14])); // 8
console.log(minCost([2, 2, 2, 2, 2], [4, 2, 8, 1, 3])); // 0
