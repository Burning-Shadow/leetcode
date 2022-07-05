/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const mapList = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
  ];

  const dfs = (currDigits, str) => {
    if (!currDigits.length) return result.push(str);

    const [num] = currDigits;
    mapList[num].forEach((item) => dfs(currDigits.slice(1), str + item));
  }

  const result = [];
  dfs(digits, '');
  return result.filter(_ => _);
};

console.log(letterCombinations('23'));
console.log(letterCombinations(''));
console.log(letterCombinations('2'));