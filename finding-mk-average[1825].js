/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  this.m = m;
  this.k = k;
  this.pqMax1 = new PQ((a, b) => b - a);
  this.pqMax2 = new PQ((a, b) => b - a);
  this.pqMin1 = new PQ((a, b) => a - b);
  this.pqMin2 = new PQ((a, b) => a - b);
  this.arr = [];
  this.sum = 0;
  this.maxS = 0;
  this.minS = 0;
  this.delMax1 = new Map();
  this.delMax2 = new Map();
  this.delMin1 = new Map();
  this.delMin2 = new Map();
  this.cdMax1 = 0;
  this.cdMax2 = 0;
  this.cdMin1 = 0;
  this.cdMin2 = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.arr.push(num);
  this.sum += num;
  while (this.delMax1.get(this.pqMax1.top()) > 0) {
    let pop = this.pqMax1.pop();
    if (this.delMax1.get(pop) > 1) {
      this.delMax1.set(pop, this.delMax1.get(pop) - 1);
    } else {
      this.delMax1.delete(pop);
    }
    this.cdMax1--;
  }
  while (this.delMin1.get(this.pqMin1.top()) > 0) {
    let pop = this.pqMin1.pop();
    if (this.delMin1.get(pop) > 1) {
      this.delMin1.set(pop, this.delMin1.get(pop) - 1);
    } else {
      this.delMin1.delete(pop);
    }
    this.cdMin1--;
  }
  while (this.delMax2.get(this.pqMax2.top()) > 0) {
    let pop = this.pqMax2.pop();
    if (this.delMax2.get(pop) > 1) {
      this.delMax2.set(pop, this.delMax2.get(pop) - 1);
    } else {
      this.delMax2.delete(pop);
    }
    this.cdMax2--;
  }
  while (this.delMin2.get(this.pqMin2.top()) > 0) {
    let pop = this.pqMin2.pop();
    if (this.delMin2.get(pop) > 1) {
      this.delMin2.set(pop, this.delMin2.get(pop) - 1);
    } else {
      this.delMin2.delete(pop);
    }
    this.cdMin2--;
  }
  this.pqMax1.add(num);
  if (this.pqMax1.size > this.m - this.k) {
    let popMax = this.pqMax1.pop();
    this.pqMin2.add(popMax);
    this.maxS += popMax;
    if (this.pqMin2.size > this.k) {
      let popMin = this.pqMin2.pop();
      this.pqMax1.add(popMin);
      this.maxS -= popMin;
    }
  }
  this.pqMin1.add(num);
  if (this.pqMin1.size > this.m - this.k) {
    let popMin = this.pqMin1.pop();
    this.pqMax2.add(popMin);
    this.minS += popMin;
    if (this.pqMax2.size > this.k) {
      let popMax = this.pqMax2.pop();
      this.pqMin1.add(popMax);
      this.minS -= popMax;
    }
  }
  if (this.arr.length > this.m) {
    let shift = this.arr.shift();
    this.sum -= shift;
    if (shift <= this.pqMax1.top()) {
      this.delMax1.set(shift, (this.delMax1.get(shift) || 0) + 1);
      this.cdMax1++;
    } else {
      this.maxS -= shift;
      this.delMin2.set(shift, (this.delMin2.get(shift) || 0) + 1);
      this.cdMin2++;
      let popMax = this.pqMax1.pop();
      this.pqMin2.add(popMax);
      this.maxS += popMax;
    }

    if (shift >= this.pqMin1.top()) {
      this.delMin1.set(shift, (this.delMin1.get(shift) || 0) + 1);
      this.cdMin1++;
    } else {
      this.minS -= shift;
      this.delMax2.set(shift, (this.delMax2.get(shift) || 0) + 1);
      this.cdMin2++;
      let popMin = this.pqMin1.pop();
      this.pqMax2.add(popMin);
      this.minS += popMin;
    }
  }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.arr.length < this.m) {
    return -1;
  }
  return Math.floor((this.sum - this.maxS - this.minS) / (this.m - this.k - this.k));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */

class PQ {
  constructor(campare) {
    this.arr = [];
    this.campare = (a, b) => campare(this.arr[a], this.arr[b]);
  }
  get size() {
    return this.arr.length;
  }
  add(data) {
    this.arr[this.size] = data;
    this.bubbleUp(this.size - 1);
  }
  top() {
    return this.arr[0];
  }
  pop() {
    const res = this.arr[0];
    const last = this.arr.pop();
    if (this.size) {
      this.arr[0] = last;
      this.bubbleDown(0);
    }
    return res;
  }
  switch(a, b) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }
  bubbleUp(index) {
    if (index === 0) {
      return index;
    }
    const parentIndex = (index - 1) >> 1;
    if (this.campare(index, parentIndex) < 0) {
      this.switch(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    let next = index;
    const leftChild = index * 2 + 1, rightChild = index * 2 + 2;
    if (leftChild < this.size && this.campare(leftChild, next) < 0) {
      next = leftChild;
    }
    if (rightChild < this.size && this.campare(rightChild, next) < 0) {
      next = rightChild;
    }
    if (next !== index) {
      this.switch(index, next);
      this.bubbleDown(next);
    }
  }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
