/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let p = 1,
    cnt0 = 0,
    cnt1 = 0,
    maxCnt0 = 0,
    maxCnt1 = 0;
  const len = s.length;

  if (len === 1) return Boolean(Number(s[0]));

  s[0] === '1' ? cnt1++ : cnt0++;

  // console.log(`maxCnt1 = ${maxCnt1}, maxCnt0 = ${maxCnt0}`);
  // console.log(`cnt1 = ${cnt1}, cnt0 = ${cnt0}`);

  while (p < len) {
    const lastChar = s[p - 1];
    const currChar = s[p];
    // console.log(`lastChar = ${lastChar} currChar = ${currChar}`);

    if (lastChar === currChar) {
      currChar === '1' ? cnt1++ : cnt0++;

      maxCnt0 = Math.max(cnt0, maxCnt0);
      maxCnt1 = Math.max(cnt1, maxCnt1);
    } else {
      currChar === '1' ? cnt1 = 1 : cnt0 = 1;
    }
    p++;
  }

  return maxCnt1 > maxCnt0;
};

console.log(checkZeroOnes('1101')); // true
console.log(checkZeroOnes('111000')); // false
console.log(checkZeroOnes('110100010')); // false
console.log(checkZeroOnes('1')); // true
console.log(checkZeroOnes('10')); // false