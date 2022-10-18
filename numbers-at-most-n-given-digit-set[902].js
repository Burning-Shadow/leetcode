/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 * 
 * 数位 dp
 */
var atMostNGivenDigitSet = function (digits, n) {
  const s = '' + n;
  const m = digits.length, k = s.length;
  const dp = new Array(k + 1).fill(0).map(() => new Array(2).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < m; j++) {
      if (digits[j][0] === s[i - 1]) {
        dp[i][1] = dp[i - 1][1];
      } else if (digits[j][0] < s[i - 1]) {
        dp[i][0] += dp[i - 1][1];
      } else {
        break;
      }
    }
    if (i > 1) {
      dp[i][0] += m + dp[i - 1][0] * m;
    }
  }
  return dp[k][0] + dp[k][1];
};

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 * 
 * 数学
 */
var atMostNGivenDigitSet = function (digits, n) {
  const s = '' + n;
  const m = digits.length, k = s.length;
  const bits = [];
  let isLimit = true;
  for (let i = 0; i < k; i++) {
    if (!isLimit) {
      bits.push(m - 1);
    } else {
      let selectIndex = -1;
      for (let j = 0; j < m; j++) {
        if (digits[j][0] <= s[i]) {
          selectIndex = j;
        } else {
          break;
        }
      }
      if (selectIndex >= 0) {
        bits.push(selectIndex);
        if (digits[selectIndex][0] < s[i]) {
          isLimit = false;
        }
      } else {
        let len = bits.length;
        while (bits.length !== 0 && bits[bits.length - 1] === 0) {
          bits.pop();
        }
        if (bits.length !== 0) {
          const n = bits.length;
          bits.splice(n - 1, 1, bits[n - 1] - 1);
        } else {
          len--;
        }
        while (bits.length <= len) {
          bits.push(m - 1);
        }
        isLimit = false;
      }
    }
  }
  let result = 0;
  for (let i = 0; i < bits.length; i++) {
    result = result * m + (bits[i] + 1);
  }
  return result;
};


console.log(atMostNGivenDigitSet(["1", "3", "5", "7"], 100));
console.log(atMostNGivenDigitSet(["1", "4", "9"], 1000000000));
console.log(atMostNGivenDigitSet(["7"], 8));