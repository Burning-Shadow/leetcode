/**
 * @param {number} n
 * @return {number}
 * 
 * 找规律
 */
var minimumBoxes = function (n) {
  let cur = 1, i = 1, j = 1;
  while (n > cur) {
    n -= cur;
    i++;
    cur += i;
  }
  cur = 1;
  while (n > cur) {
    n -= cur;
    j++;
    cur++;
  }
  return (i - 1) * i / 2 + j;
};








console.log(minimumBoxes(3)); // 3
console.log(minimumBoxes(4)); // 3
console.log(minimumBoxes(10)); // 6
