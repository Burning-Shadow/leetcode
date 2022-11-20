/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  let row = [poured]; // 每行仍可消耗的数量
  for (let i = 1; i <= query_row; i++) {
    const nextRow = new Array(i + 1).fill(0);
    for (let j = 0; j < i; j++) {
      const volume = row[j];
      if (volume > 1) {
        nextRow[j] += (volume - 1) / 2;
        nextRow[j + 1] += (volume - 1) / 2;
      }
    }
    console.log(nextRow);
    row = nextRow;
  }

  return Math.min(1, row[query_glass]);
};



console.log(champagneTower(1, 1, 1)); // 0.00000
console.log(champagneTower(2, 1, 1)); // 0.50000
console.log(champagneTower(100000009, 33, 17)); // 1.00000
