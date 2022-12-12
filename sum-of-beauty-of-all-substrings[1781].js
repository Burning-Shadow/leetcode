/**
 * @param {string} s
 * @return {number}
 * 
 * 双指针
 */
var beautySum = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const cnt = new Array(26).fill(0);
    let maxFreq = 0;
    for (let j = i; j < s.length; j++) {
      cnt[s[j].charCodeAt() - 'a'.charCodeAt()]++;
      maxFreq = Math.max(maxFreq, cnt[s[j].charCodeAt() - 'a'.charCodeAt()]);
      let minFreq = s.length;
      for (let k = 0; k < 26; k++) {
        if (cnt[k] > 0) {
          minFreq = Math.min(minFreq, cnt[k]);
        }
      }
      res += maxFreq - minFreq;
    }
  }
  return res;
};


/**
 * @param {string} s
 * @return {number}
 * 前缀和
 */
const beautySum = function (s) {
  const get = (l, r) => {
    let obj1 = st[l - 1], obj2 = st[r]
    let max = 0, min = Infinity
    for (let ch of Object.keys(obj2)) {
      let x = obj2[ch] - obj1[ch]
      // 如果字符出现情况是 0，则直接跳过
      if (!x) continue
      // 更新出现频率最大值和最小值，还是不要写 max 函数和 min 函数，比较耗时
      if (x > max) max = x
      if (x < min) min = x
    }
    return max - min
  }
  let obj = {}, p = 'abcdefghijklmnopqrstuvwxyz'
  for (let ch of p) {
    obj[ch] = 0
  }
  // st[i] 表示到 s[i] 的字母出现情况
  let st = []
  st[-1] = obj
  // 生成前缀和
  for (let i = 0; i < s.length; i++) {
    st[i] = { ...st[i - 1] }
    st[i][s[i]] += 1
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      res += get(j, i)
    }
  }
  return res
};





console.log(beautySum("aabcb")); // 5
console.log(beautySum("aabcbaa")); // 17
