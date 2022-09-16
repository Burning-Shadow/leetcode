const MOD = BigInt(1e9 + 7)

/**
 * @param {number[][]} rectangles
 * @return {number}
 * 
 * 坐标压缩
 */
var rectangleArea = function (rectangles) {
  const verticalLocs = [], horizontalLocs = []
  for (const rect of rectangles) {
    verticalLocs.push(rect[0])
    horizontalLocs.push(rect[1])
    verticalLocs.push(rect[2])
    horizontalLocs.push(rect[3])
  }

  const compress = (iterator) => {
    const xToY = new Map(), yToX = []
    let counter = 0

    for (const i of iterator) {
      if (!xToY.has(i)) {
        xToY.set(i, counter)
        yToX.push(i)
        counter++
      }
    }

    return [xToY, yToX]
  }

  verticalLocs.sort((a, b) => a - b)
  horizontalLocs.sort((a, b) => a - b)

  const [verticalXToY, verticalYToX] = compress(verticalLocs)
  const [horizontalXToY, horizontalYToX] = compress(horizontalLocs)

  const m = []
  for (let i = 0; i < horizontalYToX.length; i++) {
    m.push(Array(verticalYToX.length).fill(0))
  }

  for (const rect of rectangles) {
    const
      x1 = verticalXToY.get(rect[0]), x2 = verticalXToY.get(rect[2]),
      y1 = horizontalXToY.get(rect[1]), y2 = horizontalXToY.get(rect[3])

    for (let y = y1; y < y2; y++) {
      for (let x = x1; x < x2; x++) {
        m[y][x] = 1
      }
    }
  }

  let result = 0n

  for (let y = 0; y < horizontalYToX.length - 1; y++) {
    for (let x = 0; x < verticalYToX.length - 1; x++) {
      if (m[y][x] <= 0) {
        continue
      }

      const width = BigInt(verticalYToX[x + 1] - verticalYToX[x])
      const height = BigInt(horizontalYToX[y + 1] - horizontalYToX[y])

      result = (result + width * height) % MOD
    }
  }

  return Number(result)
};

/**
 * @param {number[][]} rectangles
 * @return {number}
 * 
 * 扫描线法
 */
var rectangleArea = function (rectangles) {
  const sides = [];
  for (const [x1, y1, x2, y2] of rectangles) {
    const segment = [y1, y2];
    sides.push({ isLeft: true, x: x1, segment });
    sides.push({ isLeft: false, x: x2, segment });
  }
  sides.sort((s1, s2) => s1.x - s2.x);

  const segments = [];
  let area = 0n;
  let prevX = 0;
  for (const { isLeft, x, segment } of sides) {
    if (x != prevX) {
      area += calcPartArea(x);
      prevX = x;
    }
    if (isLeft) {
      insertSegment(segment);
    }
    else {
      removeSegment(segment);
    }
  }

  return area % 1000000007n;

  function insertSegment(segment) {
    const [start, end] = segment;
    const i = segments.findIndex(segment => start < segment[0] || (start == segment[0] && end > segment[1]));
    if (i == -1) {
      segments.push(segment);
    }
    else {
      segments.splice(i, 0, segment);
    }
  }

  function removeSegment(segment) {
    const i = segments.indexOf(segment);
    if (i != -1) {
      segments.splice(i, 1);
    }
  }

  function calcPartArea(x) {
    const combinedSegments = [];
    for (const segment of segments) {
      if (combinedSegments.length == 0) {
        combinedSegments.push(segment.slice());
      }
      else {
        const prevSegment = combinedSegments[combinedSegments.length - 1];
        const end1 = prevSegment[1];
        const [start2, end2] = segment;
        switch (true) {
          case start2 < end1:
            prevSegment[1] = Math.max(end1, end2);
            break;
          case start2 == end1:
            prevSegment[1] = end2;
            break;
          case start2 > end1:
            combinedSegments.push(segment.slice());
            break;
        }
      }
    }
    const width = BigInt(x - prevX);
    return combinedSegments
      .map(([start, end]) => BigInt(end - start))
      .reduce((area, height) => area + width * height, 0n);
  }
};


console.log(rectangleArea([[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]])); // 6
console.log(rectangleArea([[0, 0, 1000000000, 1000000000]])); // 49