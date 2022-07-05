/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
 var numOfSubarrays = function(arr, k, threshold) {
  if (arr.length === 0 || arr.length < k) return 0;

  if (arr.length === k) return 1;

  const subArrCnt = arr.length - k + 1;
  let cnt = 0;

  for (var i = 0; i < subArrCnt; i++) {
    const list = arr.slice(i, k + i);
    const average = list.reduce((prev, curr) => (prev + curr), 0) / k;

    if (average >= threshold) cnt++;
  }

  return cnt;
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4));
console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5));
