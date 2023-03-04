/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function (nums) {
  const cnt = new Array(1 << 16).fill(0);
  for (const x of nums) {
    for (const y of nums) {
      ++cnt[x & y];
    }
  }
  let ans = 0;
  for (const x of nums) {
    for (let mask = 0; mask < (1 << 16); ++mask) {
      if ((x & mask) === 0) {
        ans += cnt[mask];
      }
    }
  }
  return ans;
};





console.log(countTriplets([2,1,3])); // 12
console.log(countTriplets([0,0,0])); // 27
