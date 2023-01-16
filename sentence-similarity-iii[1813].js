/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 * i 表示两个字符串数组从左开始，最多有 i 个字符串相同。
 * j 表示剩下的字符串数组从右开始，最多有 j 个字符串相同。
 * 如果 i+j 正好是某个字符串数组的长度，那么原字符串就是相似的。
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');
  let left = 0, right = 0;
  while (left < words1.length && left < words2.length && words1[left] === words2[left]) {
    left++;
  }
  while (right < words1.length - left && right < words2.length - left && words1[words1.length - right - 1] === words2[words2.length - right - 1]) {
    right++;
  }

  return left + right == Math.min(words1.length, words2.length);
};






console.log(areSentencesSimilar("My name is Haley", "My Haley")); // true
console.log(areSentencesSimilar("of", "A lot of words")); // false
console.log(areSentencesSimilar("Eating right now", "Eating")); // true
console.log(areSentencesSimilar("Luky", "Lucccky")); // false
