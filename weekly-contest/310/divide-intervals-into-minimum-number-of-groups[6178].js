/**
 * @param {number[][]} intervals
 * @return {number}
 * 
 * 模拟优化【贪心】
 * 复杂度 O(n^2)
 * 
 * 1. 找到一个合理的顺序方便我们讨论将当前的区间放在哪个组
 * 2. 答案 / 划分与输入的顺序无关 => 排序
 * 3. 需要一个数据结构做到：找到最小 + 更新最小的值
 * 4. 最小堆
 * 
 * 但 js 数据结构中无法直接使用，只能手动构造一个小顶堆。故暂时放弃该写法
 */
var minGroups = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // O(nlogn)
  const queue = [];
  let min = Infinity;

  for (const vec of intervals) {
    if (queue.length > 0 && min < vec[0]) {
      queue.splice(queue.indexOf(min), 1);
      min = Math.min(...queue);
    }
    queue.push(vec[1]);
    if (vec[1] < min) {
      min = vec[1];
    }
  }

  return queue.length;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 * 
 * 差分数组
 */
var minGroups = function (intervals) {
  const diff = new Array(1e+6).fill(0); // 空间换时间

  for (const [left, right] of intervals) {
    diff[left]++;
    diff[right + 1]--;
  }

  // console.log(diff);

  let ans = 0, sum = 0;
  for (const num of diff) {
    sum += num;
    if (sum > ans) ans = sum;
  }
  return ans;
};


console.log(minGroups([[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]])); // 3
console.log(minGroups([[1, 3], [5, 6], [8, 10], [11, 13]])); // 1