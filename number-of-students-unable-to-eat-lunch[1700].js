/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let s1 = _.sum(students);
  let s0 = students.length - s1;
  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 0 && s0 > 0) {
      s0--;
    } else if (sandwiches[i] === 1 && s1 > 0) {
      s1--;
    } else {
      break;
    }
  }
  return s0 + s1;
};


console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
