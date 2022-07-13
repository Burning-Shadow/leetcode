/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
function distance(point) {
  return point[0] * point[0] + point[1] * point[1]
}
const quickSort = (points, left, right, k) => {
  let pivot = left, index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (distance(points[i]) < distance(points[pivot])) {
      [points[i], points[index]] = [points[index], points[i]]
      index++
    }
  }
  [points[pivot], points[index - 1]] = [points[index - 1], points[pivot]]
  let partitionIndex = index - 1
  if (partitionIndex === k) {
    return
  } else if (partitionIndex < k) {
    quickSort(points, partitionIndex + 1, right, k)
  } else {
    quickSort(points, left, partitionIndex - 1, k)
  }
}
var kClosest = function (points, K) {
  const len = points.length
  if (len <= K) {
    return points
  }
  quickSort(points, 0, len - 1, K)
  return points.slice(0, K)
}

console.log(kClosest([[1, 3], [-2, 2]], 1)); // [[-2,2]]
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2)); // [[3,3],[-2,4]]
console.log(kClosest([[-5, 4], [-6, -5], [4, 6]], 2)); // [[-5,4],[4,6]]
