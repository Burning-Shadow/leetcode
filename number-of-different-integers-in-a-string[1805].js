/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
  const len = word.length;
  const set = new Set();
  const nums = '0123456789';
  let curr = '';

  const removeZero = (str) => {
    let i = 0;
    while (str[i] === '0') i++;
    return str.substring(i);
  };

  const washAndSetValue = () => {
    const currStr = removeZero(curr);
    curr && set.add(currStr);
    // console.log(`curr = ${curr}, currStr = ${currStr}`);
    curr = '';
  };

  for (let i = 0; i < len; i++) {
    const x = word[i];
    if (nums.includes(x)) {
      curr += x;
      if (i === len - 1) washAndSetValue();
    } else {
      washAndSetValue();
    }
  }
  // console.log('set = ', set);
  return set.size;
};





console.log(numDifferentIntegers("a123bc34d8ef34")); // 3
console.log(numDifferentIntegers("leet1234code234")); // 2
console.log(numDifferentIntegers("a1b01c001")); // 1
console.log(numDifferentIntegers("2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410")); // 3
