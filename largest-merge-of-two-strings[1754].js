/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * 
 * 贪心
 */
var largestMerge = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;

  let merge = '';
  let i = 0, j = 0;

  while (i < len1 || j < len2) {
    if (i < len1 && word1.slice(i) > word2.slice(j)) {
      merge += word1[i];
      i++;
    } else {
      merge += word2[j];
      j++;
    }
  }
  return merge;
};






console.log(largestMerge("cabaa", word2 = "bcaaa"));
console.log(largestMerge("abcabc", word2 = "abdcaba"));
