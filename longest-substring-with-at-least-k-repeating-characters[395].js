/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubstring = function(s, k) {
  try {
    if (s.length < k) return 0;

    const map = {};
    const arr = s.split('');
    arr.forEach(i => map[i] = map[i] ? map[i] + 1 : 1);

    // 不满足条件的 key 值拆分
    const keyList = Object.keys(map);
    
    for ([item, idx] of keyList) {
      if (map[item] < k) {
        let res = 0;
        const list = s.split(item);
        list.forEach(innerStr => {
          res = Math.max(res, longestSubstring(innerStr, k))
        });
        return res;
      }
    }

    return s.length;
  } catch (err) {
    throw err;
  }
};

console.log(longestSubstring('aaabb', 3));
console.log(longestSubstring('ababbc', 2));
