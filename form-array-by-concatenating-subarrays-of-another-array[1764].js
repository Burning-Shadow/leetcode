/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  let i = 0;
  const check = (g, nums, k) => {
    if (k + g.length > nums.length) {
      return false;
    }
    for (let j = 0; j < g.length; j++) {
      if (g[j] !== nums[k + j]) {
        return false;
      }
    }
    return true;
  };

  for (let k = 0; k < nums.length && i < groups.length;) {
    if (check(groups[i], nums, k)) {
      k += groups[i].length;
      i++;
    } else {
      k++;
    }
  }
  return i === groups.length;
}




/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 * 
 * KMP
 */
var canChoose = function (groups, nums) {
  let k = 0;
  const find = (nums, k, g) => {
    let m = g.length, n = nums.length;
    if (k + g.length > nums.length) {
      return -1;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
      while (j > 0 && g[i] !== g[j]) {
        j = pi[j - 1];
      }
      if (g[i] === g[j]) {
        j++;
      }
      pi[i] = j;
    }
    for (let i = k, j = 0; i < n; i++) {
      while (j > 0 && nums[i] !== g[j]) {
        j = pi[j - 1];
      }
      if (nums[i] === g[j]) {
        j++;
      }
      if (j === m) {
        return i - m + 1;
      }
    }
    return -1;
  };

  for (let i = 0; i < groups.length; i++) {
    k = find(nums, k, groups[i]);
    if (k == -1) {
      return false;
    }
    k += groups[i].length;
  }
  return true;
}









console.log(canChoose([[1, -1, -1], [3, -2, 0]], [1, -1, 0, 1, -1, -1, 3, -2, 0])); // true
console.log(canChoose([[10, -2], [1, 2, 3, 4]], [1, 2, 3, 4, 10, -2])); // false
console.log(canChoose([[1, 2, 3], [3, 4]], [7, 7, 1, 2, 3, 4, 7, 7])); // false
