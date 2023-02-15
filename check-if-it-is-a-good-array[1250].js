/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 裴蜀定理
 * 这个不会
 */
var isGoodArray = function (nums) {
  let divisor = nums[0];
  for (const num of nums) {
    divisor = gcd(divisor, num);
    if (divisor === 1) {
      break;
    }
  }
  return divisor === 1;
}

const gcd = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num1;
    num1 = num2;
    num2 = temp % num2;
  }
  return num1;
};





console.log(isGoodArray([12, 5, 7, 23])); // true
console.log(isGoodArray([29, 6, 10])); // true
console.log(isGoodArray([3, 6])); // false
