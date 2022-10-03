/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  const len = start.length;
  let i = 0, j = 0;
  while (i < len && j < len) {
    while (i < len && start[i] === 'X') i++;
    while (j < len && end[j] === 'X') j++;
    if (i < len && j < len) {
      if (start[i] !== end[j]) return false;
      const c = start[i];
      if ((c === 'L' && i < j) || (c === 'R' && i > j)) return false;
      i++;
      j++;
    }
  }
  while (i < len) {
    if (start[i] !== 'X') return false;
    i++;
  }
  while (j < len) {
    if (end[j] !== 'X') return false;
    j++;
  }
  return true;
};


console.log(canTransform());