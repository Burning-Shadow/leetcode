/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 *
 * 格雷编码【这个真没看懂】
 */
var circularPermutation = function (n, start) {
  const ret = [start];
  for (let i = 1; i <= n; i++) {
    const m = ret.length;
    for (let j = m - 1; j >= 0; j--) {
      ret.push(((ret[j] ^ start) | (1 << (i - 1))) ^ start);
    }
  }
  return ret;
};




console.log(circularPermutation(2, 3)); // [3,2,0,1]
console.log(circularPermutation(3, 2)); // [2,6,7,5,4,0,1,3]
