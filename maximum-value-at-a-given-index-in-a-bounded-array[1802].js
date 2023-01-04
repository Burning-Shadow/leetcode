/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 * 
 * 贪心 + 二分查找
 */
var maxValue = function (n, index, maxSum) {
  let left = 1, right = maxSum;

  const valid = (mid, n, index, maxSum) => {
    let left = index;
    let right = n - index - 1;
    return mid + cal(mid, left) + cal(mid, right) <= maxSum;
  }

  const cal = (big, length) => {
    if (length + 1 < big) {
      const small = big - length;
      return Math.floor((big - 1 + small) * length / 2);
    } else {
      const ones = length - (big - 1);
      return Math.floor(big * (big - 1) / 2) + ones;
    }
  };

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (valid(mid, n, index, maxSum)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
}





/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 * 
 * 数学推导
 */
var maxValue = function (n, index, maxSum) {
  let left = index;
  let right = n - index - 1;
  if (left > right) {
    let temp = left;
    left = right;
    right = temp;
  }

  let upper = ((left + 1) * (left + 1) - 3 * (left + 1)) / 2 + left + 1 + (left + 1) + ((left + 1) * (left + 1) - 3 * (left + 1)) / 2 + right + 1;
  if (upper >= maxSum) {
    let a = 1;
    let b = -2;
    let c = left + right + 2 - maxSum;
    return Math.floor((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  }

  upper = (2 * (right + 1) - left - 1) * left / 2 + (right + 1) + ((right + 1) * (right + 1) - 3 * (right + 1)) / 2 + right + 1;
  if (upper >= maxSum) {
    let a = 1.0 / 2;
    let b = left + 1 - 3.0 / 2;
    let c = right + 1 + (-left - 1) * left / 2 - maxSum;
    return Math.floor((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  } else {
    let a = left + right + 1;;
    let b = (-left * left - left - right * right - right) / 2 - maxSum;
    return Math.floor(-b / a);
  }
};






console.log(maxValue(4, 2, 6)); // 2
console.log(maxValue(6, 1, 10)); // 3
