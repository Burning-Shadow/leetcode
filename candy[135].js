/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const len = ratings.length;
  const candys1 = [1];
  const candys2 = new Array(len).fill(1);
  const candys = [];

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) candys1[i] = candys1[i - 1] + 1;
    else candys1[i] = 1;
  }

  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) candys2[i] = candys2[i + 1] + 1;
    else candys2[i] = 1;
  }

  for (let i = 0; i < len; i++) candys[i] = Math.max(candys1[i], candys2[i]);

  console.log(candys);

  return candys.reduce((total, curr) => total + curr, 0);
};

console.log(candy([1, 0, 2])); // 5
console.log(candy([1, 2, 2])); // 4
console.log(candy([1, 3, 2, 2, 1])); // 7