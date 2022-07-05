/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let step = 0;
  const deadSet = new Set(deadends);
  const visitedSet = new Set();

  const q = ["0000"];

  while (q.length) {
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      if (node == target) return step;
      if (visitedSet.has(node)) continue;
      if (deadSet.has(node)) continue;
      visitedSet.add(node);

      for (let j = 0; j < node.length; j++) {
        const num = node[j] - '0';
        const up = (num + 1) % 10;
        const down = (num + 9) % 10;
        q.push(node.substring(0, j) + up + node.substring(j + 1));
        q.push(node.substring(0, j) + down + node.substring(j + 1));
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