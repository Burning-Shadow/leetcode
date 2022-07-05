/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;

  if (len1 > len2) return false;

  // 初始化数组列表
  const charCnt = new Array(26).fill(0); // 26 个字母计数数组
  const s2CharCnt = new Array(26).fill(0); // 26 个字母计数数组
  for (let i = 0; i < len1; i++) {
    const idx1 = s1[i].charCodeAt(0) - 97;
    const idx2 = s2[i].charCodeAt(0) - 97;

    charCnt[idx1]++;
    s2CharCnt[idx2]++;
  }

  if (JSON.stringify(charCnt) === JSON.stringify(s2CharCnt)) return true;

  let left = 1; right = len1;
  while (right < len2) {
    s2CharCnt[s2[left - 1].charCodeAt(0) - 97]--;
    s2CharCnt[s2[right].charCodeAt(0) - 97]++;

    // console.log('charCnt = ', charCnt);
    // console.log('s2CharCnt = ', s2CharCnt);
    if (JSON.stringify(charCnt) === JSON.stringify(s2CharCnt)) return true;
    left++;
    right++;
  }

  if (right === len2) return false;
};

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
