/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
  if (sentence.length < 26) return false;
  const set = new Set(sentence);
  if (set.has(' ')) return set.size === 27;
  else return set.size === 26;
};




console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')); // true
console.log(checkIfPangram('leetcode')); // false
