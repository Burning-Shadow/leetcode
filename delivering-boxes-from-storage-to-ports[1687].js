var boxDelivering = function(boxes, portsCount, maxBoxes, maxWeight) {
  const n = boxes.length;
  const p = new Array(n + 1).fill(0);
  const w = new Array(n + 1).fill(0);
  const neg = new Array(n + 1).fill(0);
  const W = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
      p[i] = boxes[i - 1][0];
      w[i] = boxes[i - 1][1];
      if (i > 1) {
          neg[i] = neg[i - 1] + (p[i - 1] != p[i] ? 1 : 0);
      }
      W[i] = W[i - 1] + w[i];
  }

  const opt = [0];
  const f = new Array(n + 1).fill(0);
  const g = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; ++i) {
      while (i - opt[0] > maxBoxes || W[i] - W[opt[0]] > maxWeight) {
          opt.shift();
      }

      f[i] = g[opt[0]] + neg[i] + 2;

      if (i !== n) {
          g[i] = f[i] - neg[i + 1];
          while (opt.length && g[i] <= g[opt[opt.length - 1]]) {
              opt.pop();
          }
          opt.push(i);
      }
  }

  return f[n];
};



console.log(boxDelivering([[1,1],[2,1],[1,1]], 2, 3, 3)); // 4
console.log(boxDelivering([[1,2],[3,3],[3,1],[3,1],[2,4]], 3, 3, 6)); // 6
console.log(boxDelivering([[1,4],[1,2],[2,1],[2,1],[3,2],[3,4]], 3, 6, 7)); // 6
console.log(boxDelivering([[2,4],[2,5],[3,1],[3,2],[3,7],[3,1],[4,4],[1,3],[5,2]], 5, 5, 7)); // 14
