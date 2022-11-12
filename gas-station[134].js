/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 
 * 经典贪心，但案例 4 无法满足寻找 max 的思路
 */
var canCompleteCircuit = function (gas, cost) {
  const len = gas.length;
  if (len === 1 && gas[0] >= cost[0]) return 0;

  const diffArr = gas.map((item, idx) => item - cost[idx]);
  const startIdxArr = [];
  diffArr.forEach((item, idx) => {
    if (item > 0) startIdxArr.push(idx);
  });

  const isUnobstructed = (startIdx) => {
    let currIdx = startIdx + 1,
      currValue = diffArr[startIdx];

    for (let i = 0; i < len; i++) {
      if (currValue >= 0) {
        currValue += diffArr[(currIdx + len) % len];
        currIdx += 1;
      } else return false;
    }

    return true;
  };

  for (const startIdx of startIdxArr) {
    if (isUnobstructed(startIdx)) return startIdx;
  }
  return -1;
};


console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // -1
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])); // 4
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])); // 3
console.log(canCompleteCircuit([2], [2])); // 0
