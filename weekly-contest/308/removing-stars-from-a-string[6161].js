/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const tempStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*' && tempStack.length) {
      tempStack.pop();
      continue;
    }
    tempStack.push(s[i]);
  }
  return tempStack.join('');
};


console.log(removeStars("leet**cod*e")); // "lecoe"
console.log(removeStars("erase*****")); // ""