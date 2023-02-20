/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const suitsSet = new Set();
  for (const suit of suits) {
    suitsSet.add(suit);
  }
  if (suitsSet.size === 1) {
    return "Flush";
  }
  const h = new Map();
  for (const rank of ranks) {
    h.set(rank, (h.get(rank) || 0) + 1);
  }
  if (h.size === 5) {
    return "High Card";
  }
  for (const value of h.values()) {
    if (value > 2) {
      return "Three of a Kind";
    }
  }
  return "Pair";
};







console.log(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"])); // "Flush"
console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"])); // "Three of a Kind"
console.log(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"])); // "Pair"
