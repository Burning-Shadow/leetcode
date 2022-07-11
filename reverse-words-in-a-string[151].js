/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
  const arr = s.split(' ');
  const targetArr = arr.filter(_ => _);
  targetArr.reverse();

  return targetArr.join(' ');
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"