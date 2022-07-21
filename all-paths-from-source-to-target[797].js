/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const stack = [];
  const result = [];

  const dfs = (graph, x, n) => {
    if (x === n) {
      result.push(stack.slice());
      return;
    }
    for (const y of graph[x]) {
      stack.push(y);
      dfs(graph, y, n);
      stack.pop();
    }
  };

  stack.push(0);
  dfs(graph, 0, graph.length - 1);

  return result;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // [[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])); // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]