/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let result = -1, max = 0;
  const map = new Map();
  for (const num of nums) {
    const value = map.get(num);
    if (!value) map.set(num, 1);
    else map.set(num, value + 1);
  }

  console.log(map);

  const keys = map.keys();

  // console.log(keys);

  for (const key of keys) {
    // console.log(`key = ${key}, map.get(key) = ${map.get(key)}`);
    if (key % 2 === 0 && max === map.get(key) && key < result) result = key;
    else if (key % 2 === 0 && max < map.get(key)) {
      result = key;
      max = map.get(key);
      // console.log(`key = ${key}, max = ${max}`);
    }
  }

  return result;
};

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); // 2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4])); // 4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); // -1
console.log(mostFrequentEven([8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290])); // 3346