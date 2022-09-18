/**
 * @param {string[]} words
 * @return {number[]}
 * 
 * 超时
 */
var sumPrefixScores = function (words) {
  const len = words.length;
  const set = new Set();
  const result = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    const word = words[i];
    const wordLen = word.length;

    for (let j = 1; j <= wordLen; j++) {
      const str = word.substring(0, j);
      if (!set.has(str)) set.add(str);

      result[i] += (words.filter(_ => _.startsWith(str)).length);
    }
  }

  return result;
};


/**
 * @param {string[]} words
 * @return {number[]}
 * 
 * 前缀树
 */
var sumPrefixScores = function (words) {
  // 构造前缀树 
  const tries = new Trie();
  for (const word of words) {
    tries.insert(word);
  }

  const ans = new Array(words.length).fill(0);

  // 查找每一个字符串对应的总和
  for (let i = 0; i < words.length; i++) {
    ans[i] += tries.searchPrefix(words[i]);
  }
  return ans;
};


/*
 * 构造前缀树/字典树
 */
var Trie = function () {
  // 这里我把构造的结构都放在children里
  this.children = {}
};
// 插入字符串
Trie.prototype.insert = function (word) {
  let node = this.children;
  for (const char of word) {
    if (!node[char]) {
      // 正常情况下应该是 node[char] = {};
      // 这里加上一个num，用来统计数量，方便之后获取来到这里的前缀字符的分数
      node[char] = {
        // 不是 1 是因为下面统一加 1
        num: 0
      };
    }
    node = node[char];
    // 加 1
    node.num++;
  }
};
Trie.prototype.searchPrefix = function (word) {
  let node = this.children;
  let result = 0;
  for (const char of word) {
    if (node[char]) {
      node = node[char];
      // 统计分数
      result += node.num;
    } else {
      return 0;
    }
  }
  return result;
};

console.log(sumPrefixScores(["abc", "ab", "bc", "b"])); // [5,4,3,2]
console.log(sumPrefixScores(["abcd"])); // [4]