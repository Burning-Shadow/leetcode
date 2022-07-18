/**
 * @param {string} s
 * @return {number}
 * 
 * 这个题解写不错
 * https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/solution/si-kao-de-guo-cheng-bi-da-an-zhong-yao-xiang-xi-tu/
 * 
 * 滑窗题，当窗口内信息满足条件时直接 cnt += len - 窗口右延，随后左延右移直至不符合，继而重复上述过程
 */
var numberOfSubstrings = function (s) {
  const map = { a: 0, b: 0, c: 0 };
  const len = s.length;
  let cnt = 0;
  let i = 0;
  for (let j = 0; j < len; j++) {
    map[s[j]] += 1;

    while (Object.values(map).every(_ => _)) {
      cnt += len - j;
      map[s[i]] -= 1;
      i++;
    }
  }

  return cnt;
};

console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3
console.log(numberOfSubstrings("abc")); // 1