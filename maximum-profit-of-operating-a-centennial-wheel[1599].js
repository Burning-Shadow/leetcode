/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
  let result = -1;
  let maxProfit = 0;
  let totalProfit = 0;
  let operations = 0;
  let customersCount = 0;
  const n = customers.length;
  for (let i = 0; i < n; i++) {
    operations++;
    customersCount += customers[i];
    let curCustomers = Math.min(customersCount, 4);
    customersCount -= curCustomers;
    totalProfit += boardingCost * curCustomers - runningCost;
    if (totalProfit > maxProfit) {
      maxProfit = totalProfit;
      result = operations;
    }
  }
  if (customersCount === 0) {
    return result;
  }
  const profitEachTime = boardingCost * 4 - runningCost;
  if (profitEachTime <= 0) {
    return result;
  }
  if (customersCount > 0) {
    const fullTimes = Math.floor(customersCount / 4);
    totalProfit += profitEachTime * fullTimes;
    operations += fullTimes;
    if (totalProfit > maxProfit) {
      maxProfit = totalProfit;
      result = operations;
    }
    const remainingCustomers = customersCount % 4;
    const remainingProfit = boardingCost * remainingCustomers - runningCost;
    totalProfit += remainingProfit;
    if (totalProfit > maxProfit) {
      maxProfit = totalProfit;
      operations++;
      result++;
    }
  }
  return result;
};







console.log(minOperationsMaxProfit([8, 3], 5, 6)); // 3
console.log(minOperationsMaxProfit([10, 9, 6], 6, 4)); // 7
console.log(minOperationsMaxProfit([3, 4, 0, 5, 1], 1, 92)); // -1
