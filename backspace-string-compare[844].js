/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 用栈复杂度较高，空间复杂度为 O(m + n)
 */
var backspaceCompare = function (s, t) {
  const stack1 = [];
  const stack2 = [];
  const len1 = s.length;
  const len2 = t.length;

  for (let i = 0; i < len1; i++) {
    if (s[i] === '#') stack1.pop();
    else stack1.push(s[i]);
  }
  for (let i = 0; i < len2; i++) {
    if (t[i] === '#') stack2.pop();
    else stack2.push(t[i]);
  }

  if (stack1.length !== stack2.length) return false;
  return stack1.join('') === stack2.join('');
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 双指针方式更节约空间
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1,
    j = t.length - 1,
    skipS = 0,
    skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
  return true;
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
console.log(backspaceCompare("bbbextm", "bbb#extm")); // false