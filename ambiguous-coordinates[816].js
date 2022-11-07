/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  const result = [];

  function getPoint(s) {
    const result = [];
    for (let i = 1; i < s.length; i++) {
      // 小数点阻隔时切记末尾与开头均不得为 0
      if ((i > 1 && s[0] === '0') || s.at(-1) === '0') break;
      result.push(`${s.slice(0, i)}.${s.slice(i)}`);
    }
    if (s[0] !== '0' || s === '0') result.push(s);
    return result;
  }

  for (let i = 2; i < s.length - 1; i++) {
    const xArr = getPoint(s.slice(1, i)),
      yArr = getPoint(s.slice(i, s.length - 1));

    for (const x of xArr) {
      for (const y of yArr) {
        result.push(`(${x}, ${y})`);
      }
    }
  }

  return result;
};





console.log(ambiguousCoordinates("(123)")); // ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
console.log(ambiguousCoordinates("(00011)")); // ["(0.001, 1)", "(0, 0.011)"]
console.log(ambiguousCoordinates("(0123)")); // ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
console.log(ambiguousCoordinates("(100)")); // [(10, 0)]