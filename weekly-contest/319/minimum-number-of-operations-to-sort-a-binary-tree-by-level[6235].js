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
 * @return {number}
 */
var minimumOperations = function (root) {
  const floors = [];
  const queue = [root];

  const getMinSwapCount = (arr) => {
    const sorted = [...arr];
    arr.sort((a, b) => a - b);
    const len = arr.length;
    const map = new Map();
    for (let i = 0; i < len; i++) map.set(arr[i], i);

    let loops = 0;
    const flags = new Array(len).fill(false);

    for (let i = 0; i < len; i++) {
      if (!flags[i]) {
        let j = i;
        while (!flags[i]) {
          j = map.get(sorted[j]);
          flags[j] = true;
        }
        loops++;
      }
    }

    return len - loops;
  };


  while (queue.length) {
    const len = queue.length;
    const currFloor = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      currFloor.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    floors.push(currFloor);
  }

  let cnt = 0;
  for (const floor of floors) cnt += getMinSwapCount(floor);

  return cnt;
};