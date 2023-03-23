/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const n = l.length;
  const ans = [];
  for (let i = 0; i < n; ++i) {
    let left = l[i], right = r[i];
    let minv = nums[left], maxv = nums[left];
    for (let j = left + 1; j <= right; ++j) {
      minv = Math.min(minv, nums[j]);
      maxv = Math.max(maxv, nums[j]);
    }

    if (minv === maxv) {
      ans.push(true);
      continue;
    }
    if ((maxv - minv) % (right - left) !== 0) {
      ans.push(false);
      continue;
    }

    const d = (maxv - minv) / (right - left);
    let flag = true;
    const seen = new Array(right - left + 1).fill(0);
    for (let j = left; j <= right; ++j) {
      if ((nums[j] - minv) % d !== 0) {
        flag = false;
        break;
      }
      const t = Math.floor((nums[j] - minv) / d);
      if (seen[t]) {
        flag = false;
        break;
      }
      seen[t] = true;
    }
    ans.push(flag);
  }
  return ans;
};




console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5])); // [true,false,true]
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10])); // [false,true,false,false,true,true]
