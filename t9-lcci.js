/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function (num, words) {
  const map = {
    '2': new Set(['a', 'b', 'c']),
    '3': new Set(['d', 'e', 'f']),
    '4': new Set(['g', 'h', 'i']),
    '5': new Set(['j', 'k', 'l']),
    '6': new Set(['m', 'n', 'o']),
    '7': new Set(['p', 'q', 'r', 's']),
    '8': new Set(['t', 'u', 'v']),
    '9': new Set(['w', 'x', 'y', 'z']),
  }

  const result = [];

  for (const word of words) {
    const len = word.length;
    let i = 0;
    while (i < len) {
      if (!map[num[i]].has(word[i])) break;
      i++;
    }
    if (i === len) result.push(word);
  }

  return result;
};

console.log(getValidT9Words("8733", ["tree", "used"])); // ["tree", "used"]
console.log(getValidT9Words("2", ["a", "b", "c", "d"])); // ["a", "b", "c"]
console.log(getValidT9Words("9675973753", [/*"alasvnpzur", "znwdgoiwso", "wduzrpnqrv", "ymrkxqdrlf", "epsqjclyqe",*/ "zopjysdqke", "zhfxsdeimz", "eitgrsdnvt"])); // ["ymrkxqdrlf","zopjysdqke"]