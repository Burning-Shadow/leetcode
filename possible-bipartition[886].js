/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  let ok = true;
  const color = Array(n + 1).fill(false);
  const visited = Array(n + 1).fill(false);

  const buildGraph = (n, dislikes) => {
    const graph = Array(n + 1).fill().map(() => new Array());
    for (let edge of dislikes) {
      const [w, v] = edge;
      graph[v].push(w);
      graph[w].push(v);
    }
    // console.log(graph);
    return graph;
  }

  const traverse = (graph, v) => {
    if (!ok) return;
    visited[v] = true;
    for (let w of graph[v]) {
      if (!visited[w]) {
        color[w] = !color[v];
        traverse(graph, w);
      } else {
        if (color[w] == color[v]) {
          ok = false;
        }
      }
    }
  }

  const graph = buildGraph(n, dislikes);
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      traverse(graph, i);
    }
  }
  return ok;
}


/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 * 
 * dfs
 */
var possibleBipartition = function (n, dislikes) {
  const dfs = (curnode, nowcolor, color, g) => {
    color[curnode] = nowcolor;
    for (const nextnode of g[curnode]) {
      if (color[nextnode] !== 0 && color[nextnode] === color[curnode]) {
        return false;
      }
      if (color[nextnode] === 0 && !dfs(nextnode, 3 ^ nowcolor, color, g)) {
        return false;
      }
    }
    return true;
  }
  const color = new Array(n + 1).fill(0);
  const g = new Array(n + 1).fill(0).map(_ => new Array());
  for (const p of dislikes) {
    const [w, v] = p;
    g[w].push(v);
    g[v].push(w);
  }
  for (let i = 1; i <= n; ++i) {
    if (color[i] === 0 && !dfs(i, 1, color, g)) {
      return false;
    }
  }
  return true;
};


/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 * 
 * bfs
 */
var possibleBipartition = function (n, dislikes) {
  const color = new Array(n + 1).fill(0);
  const g = new Array(n + 1).fill(0).map(_ => new Array());
  for (const p of dislikes) {
    const [w, v] = p;
    g[w].push(v);
    g[v].push(w);
  }
  for (let i = 1; i <= n; ++i) {
    if (color[i] === 0) {
      const queue = [i];
      color[i] = 1;
      while (queue.length !== 0) {
        const t = queue.shift();
        for (const next of g[t]) {
          if (color[next] > 0 && color[next] === color[t]) {
            return false;
          }
          if (color[next] === 0) {
            color[next] = 3 ^ color[t];
            queue.push(next);
          }
        }
      }
    }
  }
  return true;
};



console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])); // true
console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])); // false
console.log(possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]])); // false