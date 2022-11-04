/**
 * @param {number} target
 * @return {number}
 * 
 * 答案无非是 1 + 2 + 3 + ... + k = target。其中部分数的符号可能会变化
 * 一言以蔽之，每个正的 target 对应的最小步数 ans 是，满足从 1 开始到 ans 的累加和大于等于它且累加和和它相同奇偶的最小 ans
 * 
 * https://leetcode.cn/problems/reach-a-number/solutions/1947254/fen-lei-tao-lun-xiang-xi-zheng-ming-jian-sqj2/
 */
var reachNumber = function (target) {
  target = Math.abs(target);
  let k = 0;
  while (target > 0) {
    k++;
    target -= k;
  }
  return target % 2 === 0 ? k : k + 1 + k % 2;
};

console.log(reachNumber(2)); // 3
console.log(reachNumber(3)); // 2
