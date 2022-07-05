/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  const rects = rectangles.map(([width, height]) => width / height);
  const len = rects.length;
  let cnt = 0;

  for (i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (rects[i] === rects[j]) cnt += 1;
    }
  }

  return cnt;
};

console.log(interchangeableRectangles([[4,8],[3,6],[10,20],[15,30]])); // 6
console.log(interchangeableRectangles([[4,5],[7,8]])); // 0