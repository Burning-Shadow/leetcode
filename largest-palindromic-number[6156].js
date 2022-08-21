/**
 * @param {string} num
 * @return {string}
 * 
 * 贪心
 * 【对所有出现的数字进行计数统计cnt[i]，对于cnt[i] > 1 的数字，我们将较大的数放在前面。对于cnt[i] % 2 !== 0的数字，是可以被放在正中间的位置（Ps: 数量优先级高于数字大小）】
 * 1. 遍历 num 统计 0～9 出现的次数，并使用长度为 10 的 numCounts 进行缓存
 * 2. 为了使回文尽可能地大，我们应该使回文的最高位数字尽可能地大。
 *     从数组尾部开始遍历，如果numCounts[i] > 1，意味着num中i出现的次数大于1次，那么我们就可以使用i构造回文。
 *     构造完成后，将numCounts[i]减去改造回文所使用的数量（其实就是如果numCounts[i]为偶数，i剩余0个；如果numCounts[i]为奇数，i剩余1个。使用位运算轻松计算：numCounts[i] & 1）
 * 3. 倒序遍历numCounts，只要出现i的个数不为0，就在回文中间加上i
 */
var largestPalindromic = function (num) {
  const numCounts = new Array(10).fill(0);
  for (let i = 0, len = num.length; i < len; i++) numCounts[num[i]]++;

  let preStr = '', postStr = '';
  for (let i = 9; i >= 0; i--) {
    if (numCounts[i] > 1 && !(!preStr && i === 0)) {
      let num = numCounts[i] >> 1;
      let str = i.toString().padEnd(num, i);
      preStr += str;
      postStr = str + postStr;
      numCounts[i] = numCounts[i] & 1;
    }
  }

  for (let i = 9; i >= 0; i--) {
    if (numCounts[i]) {
      preStr += i;
      return preStr + postStr;
    }
  }

  return preStr + postStr;
}


console.log(largestPalindromic("444947137")); // "7449447"
console.log(largestPalindromic("00009")); // '9'