/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 
 * 递归
 */
var kthGrammar = function (n, k) {
  if (n === 1) {
    return 0;
  }
  return (k & 1) ^ 1 ^ kthGrammar(n - 1, (k + 1) / 2);
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 
 * 找规律 + 递归
 * 每一行的后半部分正好为前半部分的“翻转”——前半部分是 0 后半部分变为 1，前半部分是 1，后半部分变为 0。且每一行的前半部分和上一行相同
 */
var kthGrammar = function (n, k) {
  if (k === 1) {
    return 0;
  }
  if (k > (1 << (n - 2))) {
    return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)));
  }
  return kthGrammar(n - 1, k);
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 * 
 * 找规律 + 位运算
 * 在「方法二」的基础上，我们来进行优化，本质上我们其实只需要求在过程中的“翻转”总次数，如果“翻转”为偶数次则原问题求解为 0，否则为 1。
 */
var kthGrammar = function (n, k) {
  k--;
  let res = 0;
  while (k > 0) {
    k &= k - 1;
    res ^= 1;
  }
  return res;
};



console.log(kthGrammar(1, 1)); // 0
console.log(kthGrammar(2, 1)); // 0
console.log(kthGrammar(2, 2)); // 1
