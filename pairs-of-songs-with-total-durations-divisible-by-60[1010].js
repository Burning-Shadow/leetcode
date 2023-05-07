/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  const cnt = new Array(60).fill(0);
  for (let t of time) {
    cnt[t % 60]++;
  }
  let result = 0;
  for (let i = 1; i < 30; i++) {
    result += cnt[i] * cnt[60 - i];
  }
  result += cnt[0] * (cnt[0] - 1) / 2 + cnt[30] * (cnt[30] - 1) / 2;
  return result;
}



console.log(numPairsDivisibleBy60([30,20,150,100,40])); // 3
console.log(numPairsDivisibleBy60([60,60,60])); // 3
