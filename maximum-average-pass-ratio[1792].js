/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 * 
 * 优先队列
 * https://leetcode.cn/problems/maximum-average-pass-ratio/solutions/655597/you-xian-dui-lie-mo-ban-ji-bie-by-xiaoha-5xv7/?languageTags=javascript
 */
var maxAverageRatio = function (classes, extraStudents) {
  let heapSize = classes.length;
  // 从最后一个非叶子节点，自底向上，构建大顶堆
  let maxHeap = new Heap(classes);
  for (let i = (heapSize >> 1) - 1; i >= 0; i--) {
    maxHeap.down(i, heapSize);
  }
  console.log(maxHeap.heap);
  // 调整extraStudents次，并记录
  while (extraStudents--) {
    let [d, x, y] = maxHeap.heap[0];
    maxHeap.sum += d;
    maxHeap.heap[0] = [diff(x + 1, y + 1), x + 1, y + 1];
    maxHeap.down(0, heapSize);
  }
  // 返回
  return maxHeap.sum / heapSize;
};

// 带cmp的堆模板
let swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
var defaultCmp = (a, b) => a[0] < b[0];
// 通过率的增加量
let diff = (x, y) => { return (x + 1) / (y + 1) - x / y; }
class Heap {
  constructor(nums, cmp = defaultCmp) { // 大顶堆
    this.heap = [];
    this.sum = 0;
    for (let num of nums) {
      this.heap.push([diff(num[0], num[1]), num[0], num[1]]);
      this.sum += num[0] / num[1];
    }
    this.cmp = cmp;
  }

  // 从位置i自底向上调整堆，此题不用可删除
  up(i) {
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.cmp(this.heap[parent], this.heap[i])) {
        swap(this.heap, parent, i);
        i = parent;
      } else {
        break;
      }
    }
  }

  // 从位置i自上而下调整堆（大小为heapSize）
  down(i, heapSize) {
    while (2 * i + 1 < heapSize) {
      let child = 2 * i + 1;
      // 下沉到左右孩子较小的结点
      if (child + 1 < heapSize && this.cmp(this.heap[child], this.heap[child + 1])) {
        child++;
      }
      if (this.cmp(this.heap[i], this.heap[child])) {
        swap(this.heap, child, i);
        i = child;
      } else {
        break;
      }
    }
  }
}




console.log(maxAverageRatio([[1, 2], [3, 5], [2, 2]], 2)); // 0.78333
console.log(maxAverageRatio([[2, 4], [3, 9], [4, 5], [2, 10]], 4)); // 0.53485
