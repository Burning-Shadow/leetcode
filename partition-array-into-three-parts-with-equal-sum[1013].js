/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum % 3) return false;
  const average = sum / 3;
  const len = arr.length;

  let prev = 0, count = 0;
  for (let i = 0; i < arr.length; i++) {
    prev += arr[i]
    if (prev === average) {
      prev = 0
      count++
    }
  }
  return count >= 3
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); // true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); // false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); // true