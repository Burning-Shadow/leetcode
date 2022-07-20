/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 模拟跳转
 */
var circularArrayLoop = function (nums) {
  // return nums.some((item, idx) => hasCircle([...nums], idx));
  // console.log(hasCircle([...nums], 4));
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (hasCircle(nums, i)) return true;
  }
  return false;
};

// const hasCircle = (nums, startIdx) => {
//   const len = nums.length;
//   let idx = startIdx;
//   let isPositiveNumber = nums[idx] > 0 ? true : false;
//   let cnt = 0;

//   while (nums[idx]) {
//     const value = nums[idx];
//     if ((value > 0) !== isPositiveNumber || cnt > len) return false;
//     nums[idx] = 0;
//     cnt += 1;
//     idx = ((idx + value) % len + len) % len;
//   }

//   return cnt > 1 && nums[idx] === 0;
// };

const hasCircle = (nums, startIdx) => {
  const len = nums.length;
  let curr = startIdx, flag = nums[startIdx] > 0, k = 1;
  while (true) {
    if (k > len) return false;
    const next = ((curr + nums[curr]) % len + len) % len;
    if (flag && nums[next] < 0) return false;
    if (!flag && nums[next] > 0) return false;
    if (next == startIdx) return k > 1;
    curr = next;
    k++;
  }
};


/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 快慢指针
 */
var circularArrayLoop = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue;
    }
    let slow = i, fast = next(nums, i);
    // 判断非零且方向相同
    while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[next(nums, fast)] > 0) {
      if (slow === fast) {
        if (slow !== next(nums, slow)) {
          return true;
        } else {
          break;
        }
      }
      slow = next(nums, slow);
      fast = next(nums, next(nums, fast));
    }
    let add = i;
    while (nums[add] * nums[next(nums, add)] > 0) {
      const tmp = add;
      add = next(nums, add);
      nums[tmp] = 0;
    }
  }
  return false;
}

const next = (nums, cur) => {
  const n = nums.length;
  return ((cur + nums[cur]) % n + n) % n; // 保证返回值在 [0,n) 中
}

console.log(circularArrayLoop([2, -1, 1, 2, 2])); // true
console.log(circularArrayLoop([-1, 2])); // false
console.log(circularArrayLoop([-2, 1, -1, -2, -2])); // false
console.log(circularArrayLoop([-1, -2, -3, -4, -5])); // false
