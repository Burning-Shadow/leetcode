/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let spaceCnt = 0;
  const len = text.length;
  const words = text.split(' ').filter(_ => _);
  for (let i = 0; i < len; i++) if (text[i] === ' ') spaceCnt += 1;

  if (words.length === 1) return `${words[0]}${' '.repeat(spaceCnt)}`;
  return `${words.join(' '.repeat(spaceCnt / (words.length - 1)))}${' '.repeat(spaceCnt % (words.length - 1))}`;
};

console.log(reorderSpaces("  this   is  a sentence ")); // "this   is   a   sentence"
console.log(reorderSpaces(" practice   makes   perfect")); // "practice   makes   perfect "
console.log(reorderSpaces("hello   world")); // "hello   world"
console.log(reorderSpaces("  walks  udp package   into  bar a")); // "walks  udp  package  into  bar  a "
console.log(reorderSpaces("a")); // "a"
console.log(reorderSpaces(" hello")); // "hello "