/**
 * @param {number[]} fruits
 * @return {number}
 * 
 * 滑动窗口
 */
var totalFruit = function (tree) {
  //获得初始状态的cache，用Set去重
  let cache = [...new Set(tree)].slice(0, 2),
    index = 0,
    max = 0,
    result = 0,
    oldFruit = cache[0];

  for (let fruit of tree) {
    if (cache.includes(fruit)) {
      result++;
      if (fruit === oldFruit) index++;
      else index = 1;
      oldFruit = fruit;
    }
    else {
      // 新摘得这个水果不在篮子里时,两个篮子分别放上一次摘得水果和这次摘的水果
      cache = [oldFruit, fruit];
      max = max < result ? result : max;
      // 上一次摘得水果类型的个数 + 新摘类型水果的个数(这里不要忘记这一轮也摘了个水果)
      result = index + 1;
      // 将这一轮摘的水果记录
      index = 1;
      oldFruit = fruit;
    }
  }
  return max < result ? result : max;
};


console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5
console.log(totalFruit([1, 1, 1, 1, 2, 2, 3, 3, 3])); // 6
