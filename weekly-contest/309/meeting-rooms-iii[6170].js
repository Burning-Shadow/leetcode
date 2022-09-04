/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  const times = new Array(n).fill(0); // 记录会议室的使用次数
  const idle = new CustomPriorityQueue((i, j, queue) => {
    // Array<id>
    return queue[i] > queue[j];
  });
  const using = new CustomPriorityQueue((i, j, queue) => {
    // Array<endTime, id>
    if (queue[i][0] !== queue[j][0]) {
      return queue[i][0] > queue[j][0];
    }
    return queue[i][1] > queue[j][1];
  });

  for (let i = 0; i < n; i++) idle.insert(i);

  meetings.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < meetings.length; i++) {
    while (using.size && using.pq[1][0] <= meetings[i][0]) {
      const [, popId] = using.delTop();
      idle.insert(popId);
    }
    if (!idle.size) {
      const [time, popId] = using.delTop();
      idle.insert(popId);
      const id = idle.delTop();
      times[id]++;
      const [start, end] = meetings[i];
      using.insert([time + end - start, id]);
    } else {
      const id = idle.delTop();
      times[id]++;
      const [start, end] = meetings[i];
      using.insert([end, id]);
    }
  }

  let ans = -1;
  let maxTime = -1;
  for (let i = 0; i < n; i++) {
    if (times[i] > maxTime) {
      ans = i;
      maxTime = times[i];
    }
  }
  return ans;
};

// 小顶堆，因为优先用小的会议室
class CustomPriorityQueue {
  constructor(compare) {
    this.pq = [-1];
    this.customMore = compare;
  }
  insert(x) {
    this.pq.push(x);
    this.swim(this.pq.length - 1);
  }
  swim(i) {
    const { parent } = this;
    while (i > 0 && this.more(parent(i), i)) {
      this.swap(i, parent(i));
      i = parent(i);
    }
  }
  delTop() {
    this.swap(1, this.pq.length - 1);
    let res = this.pq.pop();
    this.sink(1);
    return res;
  }
  sink(i) {
    const { left, right, pq } = this;
    const len = pq.length;
    while (left(i) < len) {
      let temp = i;
      if (this.more(temp, left(i))) temp = left(i);
      if (right(i) < len && this.more(temp, right(i))) temp = right(i);
      if (temp === i) {
        break;
      }
      this.swap(i, temp);
      i = temp;
    }
  }
  swap(i, j) {
    const { pq } = this;
    [pq[i], pq[j]] = [pq[j], pq[i]];
  }
  more(i, j) {
    return this.customMore(i, j, this.pq);
  }
  parent(i) {
    return i >> 1;
  }
  left(i) {
    return i * 2;
  }
  right(i) {
    return i * 2 + 1;
  }
  get size() {
    return this.pq.length - 1;
  }
}


console.log(mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]])); // 0
console.log(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]])); // 1