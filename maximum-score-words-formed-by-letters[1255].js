/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 * 
 * 状态压缩
 */
var maxScoreWords = function(words, letters, score) {
  let n = words.length, result = 0;
  const count = new Array(26).fill(0);
  for (const c of letters) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (let s = 1; s < (1 << n); s++) {
      const wordCount = new Array(26).fill(0); // 统计子集 s 所有单词的字母数目
      for (let k = 0; k < n; k++) {
          if ((s & (1 << k)) === 0) { // words[k] 不在子集 s 中
              continue;
          }
          for (let i = 0; i < words[k].length; i++) {
              const c = words[k][i];
              wordCount[c.charCodeAt() - 'a'.charCodeAt()]++;
          }
      }
      let ok = true; // 判断子集 s 是否合法
      let sum = 0; // 保存子集 s 的得分
      for (let i = 0; i < 26; i++) {
          sum += score[i] * wordCount[i];
          ok = ok && (wordCount[i] <= count[i]);
      }
      if (ok) {
          result = Math.max(result, sum);
      }
  }
  return result;
};





console.log(maxScoreWords(["dog","cat","dad","good"], ["a","a","c","d","d","d","g","o","o"], [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0])); // 23
console.log(maxScoreWords(["xxxz","ax","bx","cx"], ["z","a","b","c","x","x","x"], [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10])); // 27
console.log(maxScoreWords(["leetcode"], ["l","e","t","c","o","d"], [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0])); // 0
