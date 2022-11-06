/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  const len = command.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    const char = command[i];
    if (char === 'G') result.push('G');
    if (char === ')') {
      const prev = command[i - 1];
      if (prev === 'l') result.push('al');
      else if (prev === '(') result.push('o');
    } else {
      continue;
    }
  }

  return result.join('');
};


console.log(interpret("G()(al)")); // Goal
console.log(interpret("G()()()()(al)")); // Gooooal
console.log(interpret("(al)G(al)()()G")); // alGalooG
