/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let current = 0, result = 0;
  for (const item of gain) {
    current += item;
    if (current > result) result = current;
  }
  return result;
};



console.log(largestAltitude([-5, 1, 5, 0, -7])); // 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // 0
