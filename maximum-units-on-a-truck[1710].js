/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let res = 0;
  for (const boxType of boxTypes) {
    let numberOfBoxes = boxType[0];
    let numberOfUnitsPerBox = boxType[1];
    if (numberOfBoxes < truckSize) {
      res += numberOfBoxes * numberOfUnitsPerBox;
      truckSize -= numberOfBoxes;
    } else {
      res += truckSize * numberOfUnitsPerBox;
      break;
    }
  }
  return res;
};


console.log(maximumUnits([[1, 3], [2, 2], [3, 1]], 4));
console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10));
