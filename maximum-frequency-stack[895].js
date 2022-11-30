var FreqStack = function() {
  this.freq = new Map();
  this.group = new Map();
  this.maxFreq = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  this.freq.set(val, (this.freq.get(val) || 0) + 1);
  if (!this.group.has(this.freq.get(val))) {
      this.group.set(this.freq.get(val), []);
  }
  this.group.get(this.freq.get(val)).push(val);
  this.maxFreq = Math.max(this.maxFreq, this.freq.get(val));
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const val = this.group.get(this.maxFreq)[this.group.get(this.maxFreq).length - 1];
  this.freq.set(val, this.freq.get(val) - 1);
  this.group.get(this.maxFreq).pop();
  
  if (this.group.get(this.maxFreq).length === 0) {
      this.maxFreq--;
  }
  return val;
};


const freqStack = new FreqStack();
freqStack.push (5);//堆栈为 [5]
freqStack.push (7);//堆栈是 [5,7]
freqStack.push (5);//堆栈是 [5,7,5]
freqStack.push (7);//堆栈是 [5,7,5,7]
freqStack.push (4);//堆栈是 [5,7,5,7,4]
freqStack.push (5);//堆栈是 [5,7,5,7,4,5]
freqStack.pop ();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
freqStack.pop ();//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
freqStack.pop ();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
freqStack.pop ();//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
