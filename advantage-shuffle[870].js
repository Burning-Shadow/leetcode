/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 田忌赛马
 * 1. 排序 nums1 得到自己马从劣到优的排序
 * 2. 送人头只是权宜之计。【nums1 中所有元素都小于 nums2 的某值时才会用 nums1 的最小值与 nums2 的最大值互换】
 */
var advantageCount = function (nums1, nums2) {
  let len = nums1.length;
  let result = new Array(len).fill(0);
  nums1.sort((x, y) => x - y);

  // nums2 中元素的顺序不能改变，因为计算结果的顺序依赖 nums2 的顺序，所以不能直接对 nums2 进行排序，而是利用其它数据结构来辅助。
  let indexB = new Array(len).fill(0).map((v, i) => i);
  indexB.sort((x, y) => nums2[x] - nums2[y]);

  // 比方说nums2为[13, 25, 32, 11]   如果排序的话，那就是[11,13,25,32]
  // indexB里面存放的就是[3, 0, 1, 2]
  // 3代表的是原来11所在的索引位置    0代表的是原来13所在的索引位置  1代表的是原来25所在的位置
  let i = 0; // 田忌的马排位
  let j = 0; // 齐王的马排位
  // B 从 len-1 开始（如果 A 当前最小的数无法对 B 形成优势，就需要让它覆盖 B 当前最大的数字）
  let k = len - 1;
  while (i < len) {
    // 跟对应的排位的马对比  能比得过的话就拼，拼不过的话，就让舍弃它去对抗对手最强的
    if (nums1[i] > nums2[indexB[j]]) {
      result[indexB[j]] = nums1[i];
      j++;
    } else {
      result[indexB[k]] = nums1[i];
      k--;
    }
    i++;
  }
  return result;
};

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11])); // [2,11,7,15]
console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11])); // [24,32,8,12]