/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let n = arr.length, j = n - 1;
  while (j > 0 && arr[j - 1] <= arr[j]) {
    j--;
  }
  if (j === 0) {
    return 0;
  }
  let result = j;
  for (let i = 0; i < n; i++) {
    while (j < n && arr[j] < arr[i]) {
      j++;
    }
    result = Math.min(result, j - i - 1);
    if (i + 1 < n && arr[i] > arr[i + 1]) {
      break;
    }
  }
  return result;
};




console.log(findLengthOfShortestSubarray([1,2,3,10,4,2,3,5])); // 3
console.log(findLengthOfShortestSubarray([5,4,3,2,1])); // 4
console.log(findLengthOfShortestSubarray([1,2,3])); // 0
console.log(findLengthOfShortestSubarray([1])); // 0
