/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const resultArr = mergeSort(nums);
	console.log(resultArr);
	return resultArr[nums.length - k];
};

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	const mid = arr.length >> 1;
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
};

function merge(leftArr, rightArr) {
	const result = [];
	while (leftArr.length > 0 && rightArr.length > 0) {
		if (leftArr[0] < rightArr[0])
			result.push(leftArr.shift());
		else
			result.push(rightArr.shift());
	}
	return result.concat(leftArr).concat(rightArr);
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4