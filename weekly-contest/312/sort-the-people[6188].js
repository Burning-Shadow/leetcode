/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const list = names.map((item, idx) => ({
    name: item,
    height: heights[idx],
  }));

  list.sort((a, b) => b.height - a.height);

  return list.map(_ => _.name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Bob","Alice","Bob"]