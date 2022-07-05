/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
  const n = s.length;
  const total = 1 << n; // 罗列枚举状态
  const map = new Array(total).fill(0);
  let bits = total;

  // 枚举所有子序列
  while (bits--) {
    let sub = '';
    for (let i = 0; i < n; i++) {
      if (bits & (1 << i)) sub += s[i];
    }
    console.log('sub = ', sub);
    if (check(sub)) map[bits] = sub.length;
  }

  let ans = 0;
  for (let i = 0; i < total; i++) {
    if (map[i] === 0) continue;
    for (let j = i + 1; j < total; j++) {
      if ((i & j) === 0) ans = Math.max(ans, map[i] * map[j]);
    }
  }
  return ans;
};

// 检测是否为回文字符串
function check(s) {
  let l = 0,
    r = s.length - 1;
  while (l < r)
    if (s[l++] !== s[r--]) return false;
  return true;
}

console.log(maxProduct("leetcodecom")); // 9
// console.log(maxProduct("bb")); // 1
// console.log(maxProduct("accbcaxxcxx")); // 25