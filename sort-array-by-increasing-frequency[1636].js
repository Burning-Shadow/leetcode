/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const cnt = new Map();
  for (const num of nums) {
    cnt.set(num, (cnt.get(num) || 0) + 1);
  }
  const list = [...nums];
  list.sort((a, b) => {
    const cnt1 = cnt.get(a), cnt2 = cnt.get(b);
    return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a;
  });

  return list;
};

console.log(frequencySort([1, 1, 2, 2, 2, 3])); // [3,1,1,2,2,2]
console.log(frequencySort([2, 3, 1, 3, 2])); // [1,3,3,2,2]
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); // [5,-1,4,4,-6,-6,1,1,1]