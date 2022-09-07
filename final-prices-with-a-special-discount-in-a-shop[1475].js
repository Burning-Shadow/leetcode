/**
 * @param {number[]} prices
 * @return {number[]}
 * 
 * 遍历
 */
var finalPrices = function (prices) {
  const len = prices.length;
  const result = new Array(len).fill(0);
  for (let i = 0; i < len; ++i) {
    let discount = 0;
    for (let j = i + 1; j < len; ++j) {
      if (prices[j] <= prices[i]) {
        discount = prices[j];
        break;
      }
    }
    result[i] = prices[i] - discount;
  }
  return result;
};

/**
 * @param {number[]} prices
 * @return {number[]}
 * 
 * 单调栈
 */
var finalPrices = function (prices) {
  const n = prices.length;
  const ans = new Array(n).fill(0);
  const stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }
    ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
    stack.push(prices[i]);
  }
  return ans;
};

console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
console.log(finalPrices([1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(finalPrices([10, 1, 1, 6])); // [9,0,1,6]