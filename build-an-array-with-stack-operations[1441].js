/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const result = [];
  const len = target.length;
  let curr = 1, currIdx = 0;

  while (curr <= n && currIdx < len) {
    while (target[currIdx] > curr) {
      curr += 1;
      result.push('Push', 'Pop');
    }

    result.push('Push');
    curr += 1;
    currIdx += 1;
  }

  return result;
};


console.log(buildArray([1, 3], 3)); // ["Push","Push","Pop","Push"]
console.log(buildArray([1, 2, 3], 3)); // ["Push","Push","Push"]
console.log(buildArray([1, 2], 4)); // ["Push","Push"]