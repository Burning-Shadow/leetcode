/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 * 
 * 长除法
 * 由于给定的分子和分母的取值范围都是 [−2^31 ,2^31 −1]，为了防止计算过程中产生溢出，需要将分子和分母转成 64 位整数表示
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator % denominator == 0) {
    return '' + Math.floor(numerator / denominator);
  }

  const sb = [];
  if (numerator < 0 ^ denominator < 0) {
    sb.push('-');
  }

  // 整数部分
  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const integerPart = Math.floor(numerator / denominator);
  sb.push(integerPart);
  sb.push('.');

  // 小数部分
  const fractionPart = [];
  const remainderIndexDic = new Map();
  let remainder = numerator % denominator;
  let index = 0;
  while (remainder !== 0 && !remainderIndexDic.has(remainder)) {
    remainderIndexDic.set(remainder, index);
    remainder *= 10;
    fractionPart.push(Math.floor(remainder / denominator));
    remainder %= denominator;
    index++;
  }
  if (remainder !== 0) { // 有循环节
    let insertIndex = remainderIndexDic.get(remainder);
    fractionPart.splice(insertIndex, 0, '(');
    fractionPart.push(')');
  }
  sb.push(fractionPart.join(''));

  return sb.join('');
}

console.log(fractionToDecimal(1, 2)); // '0.5'
console.log(fractionToDecimal(2, 1)); // '2'
console.log(fractionToDecimal(4, 333)); // "0.(012)"