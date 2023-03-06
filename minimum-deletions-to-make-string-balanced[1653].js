/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let leftb = 0, righta = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') righta++;
  }
  let result = righta;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === 'a') righta--;
    else leftb++;
    result = Math.min(result, leftb + righta);
  }
  return result;
};






console.log(minimumDeletions("aababbab")); // 2
console.log(minimumDeletions("bbaaaaabb")); // 2
