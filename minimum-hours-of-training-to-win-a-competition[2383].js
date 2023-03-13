/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  const energySum = energy.reduce((a, b) => a + b, 0);
  const len = energy.length;

  let cnt = Math.max(energySum + 1 - initialEnergy, 0),
    currExperience = initialExperience;

  for (let i = 0; i < len; i++) {
    if (currExperience <= experience[i]) {
      cnt += experience[i] - currExperience + 1;
      currExperience += experience[i] - currExperience + 1;
    }
    currExperience += experience[i];
  }

  return cnt;
};




console.log(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])); // 8
console.log(minNumberOfHours(2, 4, [1], [3])); // 0
