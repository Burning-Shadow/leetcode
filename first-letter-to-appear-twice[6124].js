/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();
  const len = s.length;
  let idx = 0;

  for (let i = 0; i < len; i++) {
    if (!set.has(s[i])) set.add(s[i]);
    else {
      idx = i;
      break;
    }
  }

  return s[idx];
};

console.log(repeatedCharacter("abccbaacz"));