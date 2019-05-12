/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = []
        // nums = Array.from(new Set(nums))
        // console.log(nums)
    let len = nums.length

    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    arr.push(new Array(nums[i], nums[j], nums[k]))
                }
            }
        }
    }

    // 排序
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort(function(a, b) {
            return a - b;
        })
    }

    // 去重
    arr = Array.from(new Set(arr))
    console.log(arr)
    return arr
};