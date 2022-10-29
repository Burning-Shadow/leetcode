/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
function countMatches(items, ruleKey, ruleValue) {
  return items.filter(([t, c, n]) => (ruleKey === "type" && t == ruleValue) || (ruleKey === "color" && c == ruleValue) || (ruleKey === "name" && n == ruleValue)).length;
};



console.log(countMatches(
  [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]],
  "color",
  "silver"
));
console.log(countMatches(
  [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]],
  "type",
  "phone"
));
