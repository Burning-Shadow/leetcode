/**
 * @param {number} neededApples
 * @return {number}
 * 
 * 8 * 2n * (n + 1) * (2n + 1)
 */
var minimumPerimeter = function (neededApples) {
  let n = 1;
  while (2 * n * (n + 1) * (2 * n + 1) < neededApples) n++;
  return n * 8
};

/**
 * @param {number} neededApples
 * @return {number}
 * 
 * 二分法
 */
function helper(i) {
  return BigInt(2) * BigInt(i) * (BigInt(i) + BigInt(1)) * (BigInt(2) * BigInt(i) + BigInt(1))
}
var minimumPerimeter = function (neededApples) {
  let l = 1;
  let r = 1e6;
  while (l <= r) {
    let mid = (l + r) >> 1;
    let tmp = helper(mid);
    if (tmp == neededApples) {
      return mid * 8;
    } else if (tmp < neededApples) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l * 2 * 4;
};