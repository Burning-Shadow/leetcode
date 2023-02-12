/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  let cx = 0, cy = 0;
  let result = '';
  for (let i = 0; i < target.length; i++) {
    const c = target[i];
    const nx = Math.floor((c.charCodeAt() - 'a'.charCodeAt()) / 5);
    const ny = Math.floor((c.charCodeAt() - 'a'.charCodeAt()) % 5);
    if (nx < cx) {
      for (let j = 0; j < cx - nx; j++) {
        result += 'U';
      }
    }
    if (ny < cy) {
      for (let j = 0; j < cy - ny; j++) {
        result += 'L';
      }
    }
    if (nx > cx) {
      for (let j = 0; j < nx - cx; j++) {
        result += 'D';
      }
    }
    if (ny > cy) {
      for (let j = 0; j < ny - cy; j++) {
        result += 'R';
      }
    }
    result += '!';
    cx = nx;
    cy = ny;
  }
  return result;
};






console.log(alphabetBoardPath("leet")); // "DDR!UURRR!!DDD!"
console.log(alphabetBoardPath("code")); // "RR!DDRR!UUL!R!"
