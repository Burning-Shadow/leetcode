/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  const sum = energy.reduce((a, b) => a + b, 0);
  const len = experience.length;
  // 注意可能不需要训练获取额外精力
  let cnt = Math.max(sum + 1 - initialEnergy, 0)

  for (let i = 0; i < len; i++) {
    if (initialExperience <= experience[i]) {
      cnt += experience[i] - initialExperience + 1;
      initialExperience = experience[i] + 1;
    }
    initialExperience += experience[i];
  }

  return cnt;
};


console.log(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])); // 8
console.log(minNumberOfHours(2, 4, [1], [3])); // 0
console.log(minNumberOfHours(1, 1, [1, 1, 1, 1], [1, 1, 1, 50])); // 51
console.log(minNumberOfHours(
  11,
  23,
  [69, 22, 93, 68, 57, 76, 54, 72, 8, 78, 88, 15, 58, 61, 25, 70, 58, 91, 79, 22, 91, 74, 90, 75, 31, 53, 31, 7, 51, 96, 76, 17, 64, 89, 83, 54, 28, 33, 32, 45, 20],
  [51, 81, 46, 80, 56, 7, 46, 74, 64, 20, 84, 66, 13, 91, 49, 30, 75, 43, 74, 88, 82, 51, 72, 4, 80, 30, 10, 19, 40, 27, 21, 71, 24, 94, 79, 13, 40, 28, 63, 85, 70],
)); // 2323
