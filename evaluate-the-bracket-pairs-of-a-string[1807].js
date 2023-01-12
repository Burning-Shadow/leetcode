/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 * 
 * hash 表
 */
var evaluate = function (s, knowledge) {
  const dict = new Map();
  for (const kd of knowledge) {
    dict.set(kd[0], kd[1]);
  }
  let addKey = false;
  let key = '';
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') {
      addKey = true;
    } else if (c === ')') {
      if (dict.has(key)) {
        result += dict.get(key);
      } else {
        result += '?';
      }
      addKey = false;
      key = '';
    } else {
      if (addKey) {
        key += c;
      } else {
        result += c;
      }
    }
  }
  return result;
};






console.log(evaluate("(name)is(age)yearsold", [["name", "bob"], ["age", "two"]]));
console.log(evaluate("hi(name)", [["a", "b"]]));
console.log(evaluate("(a)(a)(a)aaa", [["a", "yes"]]));
