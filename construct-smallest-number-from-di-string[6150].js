/**
 * @param {string} pattern
 * @return {string}
 * 
 * https://leetcode.cn/contest/weekly-contest-306
 * 
 * 贪心
 * 这个很屌
 */
var smallestNumber = function (pattern) {
  const len = pattern.length;
  let i = 0, cur = 1, anwser = new Array(len + 1).fill(0);

  while (i < len) {
    if (i > 0 && pattern[i] == 'I') ++i;
    for (; i < len && pattern[i] == 'I'; ++i) anwser[i] = cur++;
    var i0 = i;
    while (i < len && pattern[i] == 'D') ++i;
    for (var j = i; j >= i0; --j) anwser[j] = cur++;
  }

  return anwser.join('');
};

console.log(smallestNumber('IIIDIDDD')); // 123549876
console.log(smallestNumber('DDD')); // 4321