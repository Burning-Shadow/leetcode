/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let result = 0;
  const len = s.length;
  if (new Set(s).size === 1) return len;
  const set = new Set();

  for (let i = 0; i < len; i++) {
    if (set.has(s[i])) {
      set.clear();
      result += 1;
    }
    set.add(s[i]);
    // console.log(`result = ${result}`);
  }

  return result + 1;
};

console.log(partitionString("abacaba")); // 4
console.log(partitionString("ssssss")); // 6