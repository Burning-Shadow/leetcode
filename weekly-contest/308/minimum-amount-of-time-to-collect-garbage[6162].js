/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let m = 0;
  let p = 0;
  let g = 0;
  let result = 0;
  for (let i = 0; i < garbage.length; i++) {
    // 记录最后出现的下标
    if (/M/.test(garbage[i])) m = i;
    if (/P/.test(garbage[i])) p = i;
    if (/G/.test(garbage[i])) g = i;
    // 字符长度
    result += garbage[i].length;
  }
  // 前缀和
  const travelPre = Array(travel.length + 1).fill(0);
  for (let i = 1; i <= travel.length; i++) {
    travelPre[i] = travelPre[i - 1] + travel[i - 1];
  }
  // 加上需要到达房子的时间
  result += travelPre[m];
  result += travelPre[p];
  result += travelPre[g];
  return result;
};

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3])); // 21
console.log(garbageCollection(["MMM", "PGM", "GP"], [3, 10])); // 37