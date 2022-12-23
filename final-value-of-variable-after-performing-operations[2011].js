/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (const op of operations) {
    if ("X++" === op || "++X" === op) x++;
    else x--;
  }
  return x;
};








console.log(finalValueAfterOperations(["--X", "X++", "X++"])); // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"])); // 3
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"])); // 0
