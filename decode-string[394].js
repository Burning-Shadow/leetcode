/**
 * @param {string} s
 * @return {string}
 * 
 * 栈
 */
var decodeString = function (s) {
  const len = s.length;
  const numStack = [];              // 倍数 num 的等待栈
  const strStack = [];              // 待拼接 str 的等待栈
  let num = 0, result = '';

  for (let i = 0; i < len; i++) {
    const item = s[i];

    if (!isNaN(item)) num = num * 10 + parseInt(item);
    else if (item === '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (item === ']') {
      const repeatTimes = numStack.pop();         // 从栈中获取次数
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += item;
    }
    console.log(`result = ${result}, num = ${num}, numStack = ${numStack}, strStack = ${strStack}`);
  }

  return result;
};

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a2[c]]")); // "accaccacc"
console.log(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"
console.log(decodeString("abc3[cd]xyz")); // "abccdcdcdxyz"