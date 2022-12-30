/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 * 
 * 两列表排序后即可一一对应，故第 i 个学生挪动的距离是 |students[i] - seats[i]|
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < seats.length; i++) {
    result += Math.abs(seats[i] - students[i]);
  }
  return result;
};





console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 4
