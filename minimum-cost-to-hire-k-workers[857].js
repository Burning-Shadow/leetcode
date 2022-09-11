/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 * 
 * 贪心 + 优先队列
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;
  const h = new Array(n).fill(0).map((_, i) => i);
  h.sort((a, b) => quality[b] * wage[a] - quality[a] * wage[b]);

  let result = 1e9;
  let totalq = 0.0;
  const pq = new MaxPriorityQueue();
  for (let i = 0; i < k - 1; i++) {
    totalq += quality[h[i]];
    pq.enqueue(quality[h[i]]);
  }
  for (let i = k - 1; i < n; i++) {
    let idx = h[i];
    totalq += quality[idx];
    pq.enqueue(quality[idx]);
    const totalc = (wage[idx] / quality[idx]) * totalq;
    result = Math.min(result, totalc);
    totalq -= pq.dequeue().element;
  }

  return result;
};

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2)); // 105.00000
console.log(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3)); // 30.66667