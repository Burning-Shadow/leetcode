/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 * 
 * 贪心，不过没看懂
 * https://leetcode.cn/problems/minimum-swaps-to-make-strings-equal/solutions/2131832/mei-xiang-ming-bai-yi-zhang-tu-miao-dong-a6r1/
 */
var minimumSwap = function (s1, s2) {
  let xy = 0, yx = 0;
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    const a = s1[i], b = s2[i];
    if (a === 'x' && b === 'y') xy++;
    if (a === 'y' && b === 'x') yx++;
  }
  if ((xy + yx) % 2 === 1) return -1;
  return Math.floor(xy / 2) + Math.floor(yx / 2) + xy % 2 + yx % 2;
};



console.log(minimumSwap("xy", "yx")); // 2
console.log(minimumSwap("xx", "yy")); // 1
console.log(minimumSwap("xx", "xy")); // -1
console.log(minimumSwap("xxyyxyxyxx", "xyyxyxxxyx")); // 4
