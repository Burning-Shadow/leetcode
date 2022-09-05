/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 * 
 * 序列化
 * 将树结构序列化为类似 x(左子树序列化结果)(右子树序列化结果) 的类 1(2(4()())())(3(2(4()())())(4()())) 串
 * 通过一个 hash ———— seen 来存储序列到子树的映射
 * 如果在计算序列时，通过 seen 查找到了已经出现过的序列，那么就可以把对应的子树放到哈希集合 repeat 中
 */
var findDuplicateSubtrees = function (root) {
  const seen = new Map(); // 存储序列到子树的映射
  const repeat = new Set(); // 计算序列时找到了

  const dfs = (node) => {
    if (!node) return "";

    let sb = '';
    sb += node.val;
    sb += "(";
    sb += dfs(node.left);
    sb += ")(";
    sb += dfs(node.right);
    sb += ")";
    if (seen.has(sb)) {
      repeat.add(seen.get(sb));
    } else {
      seen.set(sb, node);
    }
    return sb;
  }
  dfs(root);
  return [...repeat];
};

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 * 
 * 用三元组进行唯一表示
 * 使用一个三元组进行一棵子树的唯一表示：(x, l, r)。
 */
var findDuplicateSubtrees = function (root) {
  const seen = new Map();
  const repeat = new Set();
  let idx = 0;

  const dfs = (node) => {
    if (!node) return 0;

    const tri = [node.val, dfs(node.left), dfs(node.right)];
    const hash = tri.toString();
    if (seen.has(hash)) {
      const pair = seen.get(hash);
      repeat.add(pair[0]);
      return pair[1];
    } else {
      seen.set(hash, [node, ++idx]);
      return idx;
    }
  }

  dfs(root);
  return [...repeat];
};