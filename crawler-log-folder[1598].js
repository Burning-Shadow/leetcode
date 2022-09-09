/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;
  for (const log of logs) {
    if ('./' === log) {
      continue;
    } else if ('../' === log) {
      if (depth > 0) {
        depth--;
      }
    } else {
      depth++;
    }
  }
  return depth;
};


console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"])); // 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])); // 3
console.log(minOperations(["d1/", "../", "../", "../"])); // 0