/**
 * 堆
 * 默认最大堆
 */
class Heap {
  data;
  compare;
  constructor(arr, compareFn) {
    this.compare = compareFn || ((a, b) => Number(a) - Number(b));
    if (Array.isArray(arr) && arr.length) {
      this.data = [...arr];
      this.heapify();
    }
    else {
      this.data = [];
    }
  }
  getSize() {
    return this.data.length;
  }
  isEmpty() {
    return this.getSize() === 0;
  }
  parent(i) {
    if (i === 0) {
      throw new Error('index-0 dosen\'t have parent.');
    }
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return i * 2 + 1;
  }
  rightChild(i) {
    return i * 2 + 2;
  }
  // 添加元素
  add(e) {
    this.data.push(e);
    this.shiftUp(this.data.length - 1);
  }
  // 查看堆顶元素
  peek() {
    if (this.isEmpty()) {
      throw new Error('heap is empty!');
    }
    return this.data[0];
  }
  // 删除堆顶元素
  extraTop() {
    const ret = this.peek();
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.shiftDown(0);
    return ret;
  }
  // 上浮
  shiftUp(k) {
    while (k > 0 && this.compare(this.data[k], this.data[this.parent(k)]) >= 0) {
      this.swap(k, this.parent(k));
      k = this.parent(k);
    }
  }
  // 下沉
  shiftDown(k) {
    while (this.leftChild(k) < this.getSize()) {
      let j = this.leftChild(k);
      if (j + 1 < this.getSize() && this.compare(this.data[j], this.data[j + 1]) < 0) {
        j++;
      }
      if (this.compare(this.data[k], this.data[j]) >= 0) {
        break;
      }
      this.swap(k, j);
      k = j;
    }
  }
  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
  // 将数组整理成堆
  heapify() {
    for (let k = this.parent(this.getSize() - 1); k >= 0; k--) {
      this.shiftDown(k);
    }
  }
}

/**
* @param {number[]} costs
* @param {number} k
* @param {number} candidates
* @return {number}
*/
var totalCost = function (costs, k, candidates) {
  // 左最小堆
  const leftHeap = new Heap([], (a, b) => Number(b) - Number(a))
  // 右最小堆
  const rightHeap = new Heap([], (a, b) => Number(b) - Number(a))

  // 从左往右，将candidates个元素插入到左堆
  let i = 0;
  while (i < candidates && leftHeap.getSize() < candidates) {
    leftHeap.add(costs[i])
    i++;
  }
  // 从右往左，将candidates个元素插入到右堆
  let j = costs.length - 1;
  // 总长度可能不够 2 * candidates，所以需要判断j >= i才可以，避免左右堆有重复的工人
  while (j >= i && rightHeap.getSize() < candidates) {
    rightHeap.add(costs[j]);
    j--;
  }

  let ans = 0;
  while (k) {
    // 查看左右堆的堆顶元素(代价最小的工人)，如果堆元素为空，直接设置1e6，大于最大代价，不会参与计算。
    const left = leftHeap.isEmpty() ? 1e6 : leftHeap.peek();
    const right = rightHeap.isEmpty() ? 1e6 : rightHeap.peek();
    // 根据题意两侧的代价相同，优先选取坐标小的。所以只要左侧最小代价大于右侧，才用右侧的工人
    if (left > right) {
      // 用右边的工人
      ans += right;
      // 剔除掉员工
      rightHeap.extraTop()
      // i <= j 说明仍有工人未进入堆中，所以讲其插入
      if (i <= j) {
        rightHeap.add(costs[j]);
        j--;
      }
    } else { // 同理
      // 用左边的
      ans += left;
      leftHeap.extraTop()
      if (i <= j) {
        leftHeap.add(costs[i]);
        i++;
      }
    }
    k--
  }
  return ans;
};



console.log(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)); // 11
console.log(totalCost([1, 2, 4, 1], 3, 3)); // 4
