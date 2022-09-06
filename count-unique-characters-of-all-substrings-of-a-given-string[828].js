/**
 * @param {string} s
 * @return {number}
 * 
 * https://leetcode.cn/problems/count-unique-characters-of-all-substrings-of-a-given-string/solution/by-muse-77-v7cs/
 */
var uniqueLetterString = function (s) {
  const index = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!index.has(c)) {
      index.set(c, []);
      index.get(c).push(-1);
    }
    index.get(c).push(i);
  }
  let res = 0;
  for (const [_, arr] of index.entries()) {
    arr.push(s.length);
    for (let i = 1; i < arr.length - 1; i++) {
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
    }
  }
  return res;
};

console.log(uniqueLetterString("ABC")); // 10
console.log(uniqueLetterString("ABA")); // 8
console.log(uniqueLetterString("LEETCODE")); // 92