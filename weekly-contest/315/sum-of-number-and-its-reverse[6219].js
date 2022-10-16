/**
 * @param {number} num
 * @return {boolean}
 */
 var sumOfNumberAndReverse = function (num) {
  if (num === 0) return true;

  const len = num.toString().length;
  const reverseNum = (number) => {
    const str = String(number);
    const strLen = str.length;
    const targetStr1 = ((len - strLen) > 0 && num % 10 !== 0) ? `${(len - strLen) * '0'}${number}` : `${number}`;
    const targetStr2 = `${number}`;

    // 因为不确定是否需要添加前导 0，故返回两种结果
    return [
      Number(`${targetStr1.split("").reverse().join("")}`),
      Number(`${targetStr2.split("").reverse().join("")}`),
    ];
  }

  const mid = (num >> 1) + 1;

  for (let i = 1; i <= mid; i++) {
    const [reverse1, reverse2] = reverseNum(i);
    if (reverse1 + i === num || reverse2 + i === num) return true;
  }

  return false;
};



console.log(sumOfNumberAndReverse(443)); // true ———— 172 + 271 = 443
console.log(sumOfNumberAndReverse(63)); // false
console.log(sumOfNumberAndReverse(181)); // true ———— 140 + 041 = 181
console.log(sumOfNumberAndReverse(0)); // true
console.log(sumOfNumberAndReverse(2)); // true
console.log(sumOfNumberAndReverse(10)); // true
console.log(sumOfNumberAndReverse(12)); // true
console.log(sumOfNumberAndReverse(100)); // false
console.log(sumOfNumberAndReverse(187)); // true