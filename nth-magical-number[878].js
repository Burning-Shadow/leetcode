/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  const MOD = 1000000007;
  let l = Math.min(a, b);
  let r = n * Math.min(a, b);

  const lcm = (a, b) => {
    return Math.floor(a * b / gcd(a, b));
  }

  const gcd = (a, b) => {
    return b !== 0 ? gcd(b, a % b) : a;
  };

  const c = lcm(a, b);
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c);
    if (cnt >= n) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return (r + 1) % MOD;
}







console.log(nthMagicalNumber(1, 2, 3)); // 2
console.log(nthMagicalNumber(4, 2, 3)); // 6
