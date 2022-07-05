const dfs = (n, i, visited) => {
  if (i > n) return 1;

  let ans = 0;
  for (let num = 1; num <= n; num++) {
    if (!visited[num] && (num % i === 0 || i % num === 0)) {
      visited[num] = true;
      ans += dfs(n, i + 1, visited);
      visited[num] = false;
    }
  }

  return ans;
};

/**
 * @param {number} n
 * @return {number}
 */
 var countArrangement = function(n) {
  const list = new Array(n + 1);
  list.fill(false);
  return dfs(n, 1, list);
};

console.log(countArrangement(2));
