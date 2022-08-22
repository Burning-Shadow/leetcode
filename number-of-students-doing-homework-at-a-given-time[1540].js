/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  const n = startTime.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) cnt++;
  }
  return cnt;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4)); // 1
console.log(busyStudent([4], [4], 4)); // 1
console.log(busyStudent([4], [4], 5)); // 0
console.log(busyStudent([1, 1, 1, 1], [1, 3, 2, 4], 7)); // 0
console.log(busyStudent([9, 8, 7, 6, 5, 4, 3, 2, 1], [10, 10, 10, 10, 10, 10, 10, 10, 10], 5)); // 5