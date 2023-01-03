/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
  const arr = s.split(' ');
  const target = arr.filter(_ => _.match(/[0-9]/)).map(_ => Number(_));

  const len = target.length;
  let curr = target[0];
  for (let i = 1; i < len; i++) {
    if (target[i] <= curr) return false;
    curr = target[i];
  }
  return true;
};






console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")); // true
console.log(areNumbersAscending("hello world 5 x 5")); // false
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")); // false
console.log(areNumbersAscending("4 5 11 26")); // true
