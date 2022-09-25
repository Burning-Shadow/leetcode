/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * 
 * 滑窗
 */
var decrypt = function (code, k) {
  const len = code.length;
  if (k === 0) return new Array(len).fill(0);

  const result = new Array(len).fill(0);
  const newCode = new Array(len * 2).fill(0).map((_, idx) => {
    return code[idx % code.length];
  });
  code = newCode;
  let l = k > 0 ? 1 : len + k;
  let r = k > 0 ? k : len - 1;
  let w = 0;

  for (let i = l; i <= r; i++) w += code[i];

  for (let i = 0; i < len; i++) {
    result[i] = w;
    w -= code[l];
    w += code[r + 1];
    l++;
    r++;
  }
  return result;
};

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * 
 * 前缀和
 */
var decrypt = function (code, k) {
  const len = code.length;
  const result = new Array(len).fill(0);
  if (k == 0) return result;
  const sum = new Array(2 * len + 10).fill(0);
  for (let i = 1; i <= 2 * len; i++) sum[i] = sum[i - 1] + code[(i - 1) % len];
  for (let i = 1; i <= len; i++) {
    if (k < 0) result[i - 1] = sum[i + len - 1] - sum[i + len + k - 1];
    else result[i - 1] = sum[i + k] - sum[i];
  }
  return result;
}

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([1, 2, 3, 4], 0));
console.log(decrypt([2, 4, 9, 3], -2));