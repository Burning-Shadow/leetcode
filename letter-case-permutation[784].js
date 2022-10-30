/**
 * @param {string} s
 * @return {string[]}
 * 
 * dfs
 */
var letterCasePermutation = function (s) {
  const result = [];

  const isDigit = (ch) => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
  };

  const dfs = (arr, position) => {
    while (position < arr.length && isDigit(arr[position])) position += 1;
    if (position === arr.length) {
      result.push(arr.join(''));
      return;
    }

    arr[position] = String.fromCharCode(arr[position].charCodeAt() ^ 32);
    dfs(arr, position + 1);
    arr[position] = String.fromCharCode(arr[position].charCodeAt() ^ 32);
    dfs(arr, position + 1);
  };

  dfs([...s], 0);

  return result;
};


console.log(letterCasePermutation("a1b2")); // ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermutation("3z4")); // ["3z4","3Z4"]
