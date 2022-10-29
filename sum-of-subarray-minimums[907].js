/**
 * @param {number[]} arr
 * @return {number}
 * 
 * dfs 超时。length 长度最多为 3 * 10^4，复杂度降不下来
 */
var sumSubarrayMins = function (arr) {
  const len = arr.length;
  const list = [];
  const dfs = (path, idx) => {
    if (path.length > len || idx > len) return;
    if (path.length) list.push(Math.min(...path));
    dfs([...path, arr[idx]], idx + 1);
  }
  for (let i = 0; i < len; i++) dfs([], i);
  console.log(list);
  return list.reduce((a, b) => a + b, 0);
};

/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 动归
 * dp[i][j] 为 ———— 以 i 开头 j 结尾的子串
 * 
 * n题目中最大为 3*{10}^4，n^2 已接近 {10}^9，且有MOD运算，因此必然会超时。
 */
var sumSubarrayMins = function (arr) {
  const MOD = 1e9 + 7;
  const len = arr.length;
  let result = 0;

  for (let i = 0; i < len; i++) {
    let curr = arr[i];
    result = (result + curr) % MOD;
    for (let j = i + 1; j < len; j++) {
      const value = Math.min(curr, arr[j]);
      curr = value;
      result = (result + value) % MOD;
    }
  }

  return result;
};

/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 单调栈 + 贡献值【遍历两次 + 额外空间】
 * 最小值是在一段连续数字中被筛选出来的，也就是说每个最小值都有一定的辐射范围
 * 那么这个辐射范围内能产生多少个子数组呢？我们枚举一下能产生多少个不同的左右边界对即可
 */
var sumSubarrayMins = function (arr) {
  if (!arr || !arr.length) return 0;
  const MOD = 1e9 + 7;
  const len = arr.length;
  let result = 0;

  const left = []; // 每个辐射范围的左边界
  const right = []; // 每个辐射范围的右边界
  let stack = []; // 单调栈

  // 寻找下标为 i 的元素的左边界
  for (let i = 0; i < len; i++) {
    // 向左找第一个小于等于E的元素
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) stack.pop();
    // 设立一个最左边界-1
    if (!stack.length) left[i] = -1;
    else left[i] = stack[stack.length - 1];
    // 下标入栈，方便同时得到i和A[i]
    stack.push(i);
  }

  // 寻找下标为 i 的元素的右边界
  stack = [];
  for (let i = len - 1; i >= 0; i--) {
    // 向右找第一个小于E的元素
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) stack.pop();
    // 设立一个最右边界n
    if (!stack.length) right[i] = len;
    else right[i] = stack[stack.length - 1];
    // 下标入栈，方便同时得到i和A[i]
    stack.push(i);
  }

  for (let i = 0; i < len; i++) result = (result + (i - left[i]) * (right[i] - i) * arr[i]) % MOD;
  return result;
};

/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 单调栈 + 贡献值【遍历1次 & 无需额外空间】
 */
var sumSubarrayMins = function (arr) {
  if (!arr || !arr.length) return 0;
  const MOD = 1e9 + 7;
  const len = arr.length;
  const stack = []; // 单调栈
  let result = 0;

  for (let i = -1; i <= len; i++) {
    // 向左寻找第一个小于等于A[i]的元素
    while (stack.length && getElement(arr, len, stack[stack.length - 1]) > getElement(arr, len, i)) {
      // A[cur]就是之前思路中的A[i]，注意区分和上面代码的区别
      // 对于每个出栈元素来说，i就是它们的右边界，而栈顶元素就是左边界
      const cur = stack.pop();
      // 计算贡献值
      result = (result + (cur - stack[stack.length - 1]) * (i - cur) * arr[cur]) % MOD;
    }
    stack.push(i);
  }

  return result;
};

function getElement(arr, n, i) {
  if (i == -1 || i == n) return -Infinity;
  return arr[i];
}


/**
 * @param {number[]} arr
 * @return {number}
 * 
 * 好理解但慢
 */
 var sumSubarrayMins = function (arr) {
  let len = arr.length
  let mod = 10 ** 9 + 7
  let ans = 0
  for (let i = 0; i < len; i++) {
    let tempCount = 0
    let min = arr[i]
    for (let j = i; j < len; j++) {
      if (arr[j] <= min) {
        min = arr[j]
      }
      tempCount += min
    }
    ans += tempCount
  }
  return ans % mod
};



console.log(sumSubarrayMins([3, 1, 2, 4])); // 17
console.log(sumSubarrayMins([11, 81, 94, 43, 3])); // 444