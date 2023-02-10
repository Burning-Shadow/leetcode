/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 * 
 * 状态之间会有粘连依赖，所以经典 dp。再看 n 范围 在 5000 以内，距离 10 ^ 5 仍有三个数量级，所以可以 dp
 */
const MOD = 1000000007;
var dieSimulator = function (n, rollMax) {
  const d = new Array(n + 1).fill(0).map(() => new Array(6).fill(0).map(() => new Array(16).fill(0)));
  for (let j = 0; j < 6; j++) {
    d[1][j][1] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < 6; j++) {
      for (let k = 1; k <= rollMax[j]; k++) {
        for (let p = 0; p < 6; p++) {
          if (p !== j) {
            d[i][p][1] = (d[i][p][1] + d[i - 1][j][k]) % MOD;
          } else if (k + 1 <= rollMax[j]) {
            d[i][p][k + 1] = (d[i][p][k + 1] + d[i - 1][j][k]) % MOD;
          }
        }
      }
    }
  }

  let res = 0;
  for (let j = 0; j < 6; j++) {
    for (let k = 1; k <= rollMax[j]; k++) {
      res = (res + d[n][j][k]) % MOD;
    }
  }
  return res;
};





console.log(dieSimulator(2, [1, 1, 2, 2, 2, 3])); // 34
console.log(dieSimulator(2, [1, 1, 1, 1, 1, 1])); // 30
console.log(dieSimulator(3, [1, 1, 1, 2, 2, 3])); // 181
