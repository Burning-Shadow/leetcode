/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  if (rows === 1) return encodedText;
  const cols = Math.ceil(encodedText.length / rows);
  const result = [];

  for (let i = 0; i < cols; i++) {
    let currRow = 0,
      currCol = i;
    while (currRow < rows && currCol < cols) {
      // console.log(`currRow = , ${currRow}, currCol = ${currCol}, encodedText = ${encodedText[currRow * cols + currCol]}`);
      result.push(encodedText[currRow * cols + currCol]);
      currCol++;
      currRow++;
    }
  }

  let i = result.length - 1;
  while (result[i] === ' ') {
    result.pop();
    i--;
  }

  return result.join('');
};

console.log(decodeCiphertext("ch   ie   pr", rows = 3)); // "cipher"
console.log(decodeCiphertext("iveo    eed   l te   olc", rows = 4)); // "i love leetcode"
console.log(decodeCiphertext("coding", rows = 1)); // "coding"
console.log(decodeCiphertext(" b  ac", rows = 2)); // " abc"