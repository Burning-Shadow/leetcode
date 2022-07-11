/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
  const len = nums.length;
  const C = 100; // nums[i] 数字区间
  const count = new Array(len + 1).fill(0).map(() => new Array(C + 1).fill(0)); // 初始化所有数字出现次数

  // 记录坐标值为i时，所有数字的出现次数
  for (let i = 1; i <= nums.length; i++) {
    count[i] = [...count[i - 1]];
    count[i][nums[i - 1]]++;
  }

  const result = [];
  //遍历所有区间
  for (const [start, end] of queries) {
    let num;
    let min = Infinity;
    //遍历所有可能的数字
    for (let c = 1; c <= C; c++) {
      // 判断这个数是否出现在当前区间
      if (count[end + 1][c] - count[start][c] > 0) {
        if (num !== undefined) min = Math.min(c - num, min); // 因为遍历所有可能数字时是按升序遍历的，所以直接通过前后两个出现数字的差来判断最小值
        num = c;
      }
    }
    result.push(min === Infinity ? -1 : min);
  }
  return result;
};

console.log(minDifference([1, 3, 4, 8], [[0, 1], [1, 2], [2, 3], [0, 3]])); // [2,1,4,1]
console.log(minDifference([4, 5, 2, 2, 7, 10], [[2, 3], [0, 2], [0, 5], [3, 5]])); // [-1,1,1,3]