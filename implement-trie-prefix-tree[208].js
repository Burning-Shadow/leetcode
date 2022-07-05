var Trie = function () {
  this.map = new Map();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.map.set(word, word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const result = this.map.get(word);
  if (result) return true;
  return false;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  console.log('this.map.keys() = ', this.map.keys());
  return Object.keys(this.map.keys()).some(item => item.startsWith(prefix));
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const obj = new Trie();
obj.insert('apple');
obj.search('apple'); // true
obj.insert('app'); // false
obj.startsWith("app"); // true
obj.insert("app");
obj.search("app"); // true