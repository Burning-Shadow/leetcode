/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  const count = new Map();
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    count.set(c, (count.get(c) || 0) + 1);
  }

  let res = 0;
  for (let i = 0; i < text.length;) {
    // step1: 找出当前连续的一段 [i, j)
    let j = i;
    while (j < text.length && text[j] === text[i]) {
      j++;
    }
    let curCnt = j - i;

    // step2: 如果这一段长度小于该字符出现的总数，并且前面或后面有空位，则使用 curCnt + 1 更新答案
    if (curCnt < (count.get(text[i] || 0)) && (j < text.length || i > 0)) {
      res = Math.max(res, curCnt + 1);
    }

    // step3: 找到这一段后面与之相隔一个不同字符的另一段 [j + 1, k)，如果不存在则 k = j + 1 
    let k = j + 1;
    while (k < text.length && text[k] === text[i]) {
      k++;
    }
    res = Math.max(res, Math.min(k - i, (count.get(text[i]) || 0)));
    i = j;
  }
  return res;
};




console.log(maxRepOpt1('ababa')); // 3
console.log(maxRepOpt1('aaabaaa')); // 6
console.log(maxRepOpt1('aaabbaaa')); // 4
console.log(maxRepOpt1('aaaaa')); // 5
console.log(maxRepOpt1('abcdef')); // 1
