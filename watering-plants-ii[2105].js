/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  const n = plants.length;
  let res = 0;
  let l = 0;
  let r = n - 1;
  let residualCapacityA = capacityA;
  let residualCapacityB = capacityB;
  while (l < r) {
    if (residualCapacityA < plants[l]) {
      res++;
      residualCapacityA = capacityA;
    }
    if (residualCapacityB < plants[r]) {
      res++;
      residualCapacityB = capacityB;
    }
    residualCapacityA -= plants[l++];
    residualCapacityB -= plants[r--];
  }
  if (l == r) {
    if (residualCapacityA < plants[l] && residualCapacityB < plants[r]) {
      res++;
    }
  }
  return res;
};

console.log(minimumRefill([2, 2, 3, 3], 5, 5)); // 1
console.log(minimumRefill([2, 2, 3, 3], 3, 4)); // 2
console.log(minimumRefill([5], 10, 8)); // 0