/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const len = s.length;
  const set = new Set();

  for (let i = 0; i < len; i++) {
    if (set.has(s[i])) continue;
    set.add(s[i]);
    const idx = s[i].charCodeAt() - 97;
    const currDistance = s.lastIndexOf(s[i]) - i - 1;
    console.log(`currDistance = ${currDistance}, distance = ${distance[idx]}`);
    if (distance[idx] !== currDistance) return false;
  }

  return true;
};

console.log(checkDistances("abaccb", [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // true
console.log(checkDistances("aa", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // false