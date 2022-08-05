/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 * 
 * bfs
 * 既然需要记录 step 那么最好的方式一定是层序遍历。而对应的算法就是 bfs
 */
var openLock = function (deadends, target) {
  let step = 0;
  const deadSet = new Set(deadends);
  const visitedSet = new Set();

  const queue = ["0000"];

  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node == target) return step;
      if (visitedSet.has(node)) continue;
      if (deadSet.has(node)) continue;
      visitedSet.add(node);

      for (let j = 0; j < node.length; j++) {
        const num = node[j] - '0';
        const up = (num + 1) % 10;
        const down = (num + 9) % 10;
        queue.push(node.substring(0, j) + up + node.substring(j + 1));
        queue.push(node.substring(0, j) + down + node.substring(j + 1));
      }
    }
    step++;
  }
  return -1;
};
/*
BFS(G, s)    // graph G and source node s
  create a queue Q 

  Q.enqueue(s)
  mark s as visited.

  while (Q is non-empty)

  v = Q.dequeue()

  // process all the neighbours of v
  for all neighbours w of v in Graph G
    if w is not visited
      Q.enqueue(w)     // enqueue w to further visit its neighbour
      mark w as visited.
*/

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202")); // 6
// console.log(openLock(["8888"], "0009")); // 1
// console.log(openLock(["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888")); // -1