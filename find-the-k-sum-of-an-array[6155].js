/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 
 * 1. 求出所有非负整数的和 sum，这是最大的子序列和
 * 2. 反向思考：从 sum 中减去一些数，让子序列逐渐变小（把 nums 中的负数变成正数，这样都可以按减法来做）
 *    手动画图理解以下证明：
 *      ① 这样的取法，子序列不会重复
 *      ② 每次拿出堆顶的数字，基于此数必定减去，再区分第 i - 1 个数是否减去的两种情况，新加入的两个数都比取出的数字大
 * 3. 首次入堆的是最大和，然后执行 k - 1 次，堆顶就是第 k 个最大和
 */

var kSum = function (nums, k) {
  const pq = new CustomPriorityQueue();
  let total = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0) {
      total += nums[i];
    } else {
      nums[i] = -nums[i];
    }
  }
  nums.sort((a, b) => a - b);
  pq.insert([total, 0]);

  while (k > 1) {
    k--;
    const [sum, i] = pq.delTop();
    // 无论如何都要减去 nums[i]，下面两种情况是区分是否保留 nums[i - 1]
    if (i < n) {
      // 保留 nums[i - 1]
      pq.insert([sum - nums[i], i + 1]);
      /*
        不保留 nums[i - 1]
        这里为什么要加上 nums[i - 1]？
        因为前一次一定把它减去了，所以如果保留就需要加回来
      */
      if (i > 0) pq.insert([sum - nums[i] + nums[i - 1], i + 1]);
    }
  }

  return pq.top()[0];
};

class CustomPriorityQueue {
  constructor() {
    // pq: Array<sum, idx>
    this.pq = [-1]; // 索引 0 不用
  }
  insert(x) {
    this.pq.push(x);
    this.swim(this.pq.length - 1);
  }
  swim(i) {
    const { parent } = this;
    while (parent(i) > 0 && this.more(i, parent(i))) {
      this.swap(i, parent(i));
      i = parent(i);
    }
  }
  delTop() {
    const { pq } = this;
    const len = pq.length;
    this.swap(1, len - 1);
    const res = pq.pop();
    this.sink(1);
    return res;
  }
  sink(i) {
    const { left, right, pq } = this;
    const len = pq.length;
    while (left(i) < len) {
      let temp = i;
      if (this.more(left(i), temp)) temp = left(i);
      if (right(i) < len && this.more(right(i), temp)) temp = right(i);
      if (i === temp) {
        break;
      }
      this.swap(i, temp);
      i = temp;
    }
  }
  more(i, j) {
    const { pq } = this;
    return pq[i][0] > pq[j][0];
  }
  parent(i) {
    return i >> 1;
  }
  left(i) {
    return 2 * i;
  }
  right(i) {
    return 2 * i + 1;
  }
  swap(i, j) {
    const { pq } = this;
    [pq[i], pq[j]] = [pq[j], pq[i]];
  }
  top() {
    return this.pq[1];
  }
}


console.log(kSum([2, 4, -2], k = 5)); // 2
console.log(kSum([1, -2, 3, 4, -10, 12], k = 16)); // 10