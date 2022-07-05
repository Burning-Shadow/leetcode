/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  try {
    if (!pattern || !s.length) return false;
    const list = s.split(' ').filter(_ => _);

    const patternMap = {};
    list.forEach((item, idx) => {
      const patternKeyList = Object.keys(patternMap);
      if (patternKeyList.length && patternKeyList.some(key => patternMap[key] === item && pattern[idx] !== key)) {
        throw new Error('key has been repeated');
      }
      patternMap[pattern[idx]] = item;
    });


    const patternArr = pattern.split('').filter(_ => _);
    const convertStr = patternArr.reduce((prev, curr) => `${prev} ${patternMap[curr]}`, '').slice(1);

    return convertStr === s;
  } catch (err) {
    return false;
  }
};

// console.log(wordPattern('abba', 'dog cat cat dog')); // true
// console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
// console.log(wordPattern('abba', 'dog cat cat fish')); // false
// console.log(wordPattern('abba', 'dog dog dog dog')); // false
