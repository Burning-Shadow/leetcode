/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const set = new Set(nums);

  // reverse
  for (const num of nums) {
    const newNum = Number(String(num).split("").reverse().join(""));
    if (!set.has(newNum)) set.add(newNum);
  }

  return set.size;
};


console.log(countDistinctIntegers([1, 13, 10, 12, 31])); // 6
console.log(countDistinctIntegers([2, 2, 2])); // 1