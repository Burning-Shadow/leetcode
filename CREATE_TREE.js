class TreeNode { // 定义节点
  constructor(val) {
    this.val = val ? val : 0;
    this.left = null
    this.right = null
  }
}

const createTree = (arr) => { // 创建二叉树
  let tree = new TreeNode(arr[0])
  let Nodes = [tree]
  let i = 1

  for (let node of Nodes) {
    Nodes.push(node.left = arr[i] ? new TreeNode(arr[i]) : null);
    i += 1;
    if (i == arr.length) return tree;
    Nodes.push(node.right = arr[i] ? new TreeNode(arr[i]) : null);
    i += 1;
    if (i == arr.length) return tree;
  }
}

const t = createTree([-10, 9, 20, null, null, 15, 7]);

console.log(t);