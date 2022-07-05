/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 * 
 * 假设分给一个店铺最多x件商品。则最多能分到 Math.ceil((q1 + q2 + ... qi) / x) 个店铺。如果该数量小于等于 n，那么根据题意，一定存在至少一种分法将所有商品按规则分配完
 */
var minimizedMaximum = function (n, quantities) {
  // 为什么要这么判断
  function checker(num) {
    let tmp = 0;
    for (let i = 0; i < quantities.length; i++) {
      tmp += Math.ceil(quantities[i] / num);
      console.log('tmp = ', tmp);
    }
    return tmp <= n;
  }

  quantities = quantities.sort((a, b) => b - a);
  let l = 1;
  let r = quantities[0];

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    console.log('mid = ', mid);
    if (checker(mid))  r = mid;
    else l = mid + 1;
  }

  return l;
};

console.log(minimizedMaximum(6, [11, 6])); // 3
// console.log(minimizedMaximum(7, [15, 10, 10])); // 5
// console.log(minimizedMaximum(1, [100000])); // 100000
// console.log(minimizedMaximum(2, [5, 7])); // 7