/**
 * 子数组 AND 的结果不会超过其中任何一个元素
 * 
 * 可以根据此将问题进行拆解 ———— 求数组中的最大值最多连续出现的次数
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 中规中矩按位与【超时】
 */
var longestSubarray = function (nums) {
  let cache = new Array(20).fill(0);
  for (let i = 0; i < 20; ++i) cache[i] = [];
  for (let i = 0; i < 20; ++i) {
    for (let ind = 0; ind < nums.length; ++ind) {
      if (((nums[ind] >> i) & 1) !== 0) {
        cache[i].push(ind);
      }
    }
  }
  // console.log(JSON.stringify(cache))
  let target_index = [];
  let target_num = -1;
  let target_cache = -1;
  for (let i = 19; i >= 0; --i) {
    if (cache[i].length) {
      for (let num of cache[i]) {
        if (nums[num] > target_num) {
          target_num = nums[num];
          target_index = [];
        }
        if (nums[num] === target_num) {
          target_index.push(num);
        }
      }
      target_cache = i;
      break;
    }
  }
  // console.log(JSON.stringify(target_index))
  // console.log(target_num)
  let ret = 0;
  for (let ind of target_index) {
    let cur = 1;
    for (let i = ind - 1; i >= 0; i--) {
      if (nums[i] >= target_num && cache[target_cache].indexOf(i) !== -1) {
        cur += 1;
      } else {
        break;
      }
    }
    for (let i = ind + 1; i < nums.length; i++) {
      if (nums[i] >= target_num && cache[target_cache].indexOf(i) !== -1) {
        cur += 1;
      } else {
        break;
      }
    }
    ret = Math.max(cur, ret);
  }
  return ret;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 求数组中的最大值最多连续出现的次数
 */
function longestSubarray(nums) {
  const max = Math.max(...nums),
    len = nums.length;
  let res = 0,
    maxres = 1;

  for (let i = 0; i <= len; i++) {
    if (nums[i] === max) res++;
    else {
      maxres = Math.max(res, maxres);
      res = 0;
    }
  }
  return maxres;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 极简
 */
var longestSubarray = function (nums) {
  let max_num = nums.reduce((p, c) => Math.max(p, c), -1);
  return nums.reduce((p, c) => {
    return c == max_num ? [p[0] + 1, Math.max(p[1], p[0] + 1)] : [0, p[1]]
  }, [0, 0])[1];
};

console.log(longestSubarray([1, 2, 3, 3, 2, 2]));
console.log(longestSubarray([1, 2, 3, 4]));