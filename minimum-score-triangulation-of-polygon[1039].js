/**
 * @param {number[]} values
 * @return {number}
 *
 * https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/solution/qu-jian-dong-tai-gui-hua-4ms-by-njyang-yang-yang/ 【这个讲的不错】
 *
 *（1）问题简化：一共N个顶点的多边形，一下子不好直接求。那好，就简化，先从这N个顶点中拿出3个，组成小的三角形，其最小值就是三个顶点的乘积，一下子就求出来了。然后再从剩下的N-3个顶点中，取出一个顶点，在起先3个顶点基础上，组成4边形。那么新的4边形的值在原来3边形的基础上也是好求的。以此类推，把大的多边形拆分成3边形、4边形...一直到N边形，递推求解。并且每次求解，也都用到了前面求解过的值。简化了求解过程。
 *（2）dp[i][j]状态定义：原N个点序列中，取出[i，j]区间内的点，组成新的小多边形的最小解。
 *（3）状态初始值：很明显，当只取出1个点（i == j），或只取出两个顶点（i + 1 == j）时，是无法组成新的多边形的，此时dp[i][j]的值是0。（注意，要求的是最小值，那么其他的dp[][]值应该默认初始化为INT_MAX。）
 *（4）状态递推过程：就是原作者所说的，在小多边形中固定一个边ij，然后另一个顶点m分别在(i,j)范围内取值，把小多边形分成3部分来求解，这样就遍历了所有可能的情况。然后每次取最小值即可。
 *（5）for中下标的变化。依据“(3)状态初始值”可知，递推过程是从左下到右上的，最终要返回的结果也是dp[0][N - 1]。因此，i取值[N - 3, 0]，j取值[i + 2, N - 1]。而m在（i，j）范围内遍历。
 */
var minScoreTriangulation = function (values) {
  const len = values.length;
  const dp = new Array(len).fill(Infinity).map(_ => new Array(len).fill(Infinity));

  // 顶点数小于 3 不能构成三角形，dp中不会有用到顶点数为 1 的情况。
  // i、j 包含顶点数小于2的情况的值都初始化为0,便于后面计算
  for (let i = 0; i < len; i++) dp[i][(i + 1) % len] = 0;

  // temp_len + 1代表凸多边形的顶点个数
  // dp 先求凸多边形有 3 个定点的情况，再求有 4 个顶点的情况下，直至求出有 length 个顶点的情况
  for (let temp_len = 2; temp_len < len; temp_len++) {
    // 这些顶点中第一个顶点是 i，最后一个顶点是j。
    // i 和 j 都有可能为0 ~ (len - 1)（开闭区间）中的任何一个点
    for (let i = 0; i < len; i++) {
      let j = (i + temp_len) % len;
      // 虽然是循环的，但可以认为 j 在 i 的后面，也就是 k 永远不可能等于 i 或 j
      for (let k = (i + 1) % len; k !== j; k = (k + 1) % len) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);
      }
    }
  }
  return dp[0][len - 1];
};

console.log(minScoreTriangulation([1, 2, 3])); // 6
console.log(minScoreTriangulation([3, 7, 4, 5])); // 144
console.log(minScoreTriangulation([1, 3, 1, 4, 1, 5])); // 13
