/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder.sort();
  let ans = [];
  for (let i = 0, len = folder.length; i < len; i++) {
    // temp 是核心代码  防止/a /ab 被误伤
    const temp = folder[i] + '/';
    let j = i + 1;

    ans.push(folder[i]);
    while (j < len && folder[j].startsWith(temp)) {
      j++;
      i++;
    }
  }
  return ans;
};

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"])); // ["/a","/c/d","/c/f"]
console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"])); // ["/a"]
console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"])); // ["/a/b/c","/a/b/ca","/a/b/d"]