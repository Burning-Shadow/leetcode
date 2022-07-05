/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  const res = new Array(len1 + len2).fill(0);
  for (let i = len1 - 1; i >= 0; i--) {
    const n1 = +num1[i];  // 转为number类型
    for (let j = len2 - 1; j >= 0; j--) {
      const n2 = +num2[j];
      const multi = n1 * n2;
      const sum = res[i + j + 1] + multi;
      res[i + j + 1] = sum % 10; // 除以10取余
      res[i + j] += sum / 10 | 0; // 除以10取整
    }
  }
  // 循环砍 0
  while (res[0] === 0) {
    res.shift();
  }
  return res.length ? res.join('') : '0';
};

console.log(multiply("2", "3")); // 6
console.log(multiply("123", "456")); // 56088