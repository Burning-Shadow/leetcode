/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
var storeWater = function (bucket, vat) {
  if (Math.max(...vat) === 0) return 0;

  const ops = (op) => {
    let upgrades = 0;
    for (let i = 0; i < vat.length; i++) {
      // 桶需要升级的次数
      upgrades += Math.max(0, Math.ceil(vat[i] / op) - bucket[i]);
    }
    return upgrades + op;
  }

  let minOp = Infinity;
  let op = 0;
  while (op < minOp) {
    op++;
    minOp = Math.min(minOp, ops(op));
  }
  return minOp;
};

console.log(storeWater([1, 3], [6, 8])); // 4
console.log(storeWater([9, 0, 1], [0, 2, 2])); // 3