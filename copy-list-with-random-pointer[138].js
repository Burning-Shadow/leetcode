/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

const cache = new Map();

/**
 * @param {Node} head
 * @return {Node}
 * 
 * dfs + hashMap
 */
var copyRandomList = function (head, cache = new Map()) {
  if (!head) return null;
  if (!cache.has(head)) {
    cache.set(head, { val: head.val });
    Object.assign(cache.get(head), {
      next: copyRandomList(head.next, cache),
      random: copyRandomList(head.random, cache)
    });
  }
  return cache.get(head);
};

/**
 * @param {Node} head
 * @return {Node}
 * 
 * 迭代 + 节点拆分
 * 
 * 将该链表中每一个节点拆分为两个相连的节点，这样，我们可以直接找到每一个拷贝节点 S'的随机指针应当指向的节点，即为其原节点 S 的随机指针指向的节点 T 的后继节点 T'
 * 一句话总结 ———— 节点拆分后将新节点剥离出来
 * 此方法相较于前者可以省去 map 的空间
 */
var copyRandomList = function (head) {
  if (!head) return null;
  // 拆分节点，将原本的一个节点拆分为 2 个
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = new Node(node.val, node.next, null);
    node.next = nodeNew;
  }
  for (let node = head; node !== null; node = node.next.next) {
    const nodeNew = node.next;
    nodeNew.random = (node.random !== null) ? node.random.next : null;
  }
  const headNew = head.next;
  for (let node = head; node !== null; node = node.next) {
    const nodeNew = node.next;
    node.next = node.next.next;
    nodeNew.next = (nodeNew.next !== null) ? nodeNew.next.next : null;
  }
  return headNew;
};
