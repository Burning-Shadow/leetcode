/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

	// 排序
	for (let i = 0; i < nums.length; i++) {
		nums.sort(function (a, b) {
			return a - b;
		})
	}

	let len = nums.length,
		left, right, arr = [],
		target

	for (let i = 0; i < len; i++) {
		if (nums[i] > 0) break

		if (i > 0 && nums[i] == nums[i - 1]) continue

		target = 0 - nums[i]
		left = i + 1
		right = len - 1

		while (left < right) {
			if (nums[left] + nums[right] == target) {
				arr.push(new Array(-target, nums[left], nums[right]))
				while (left < right && nums[left] == nums[left + 1]) {
					left++
				}
				while (left < right && nums[right] == nums[right - 1]) {
					right--
				}
				left++
				right--
			} else if (nums[left] + nums[right] < target) {
				left++
			} else if (nums[left] + nums[right] > target) {
				right--
			}
		}
	}

	// console.log(nums)
	// console.log(arr)

	return arr

};