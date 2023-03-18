/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
  return checkConcatenation(a, b) || checkConcatenation(b, a);
}

const checkConcatenation = (a, b) => {
  const n = a.length;
  let left = 0, right = n - 1;
  while (left < right && a[left] === b[right]) {
    left++;
    right--;
  }
  if (left >= right) {
    return true;
  }
  return checkSelfPalindrome(a, left, right) || checkSelfPalindrome(b, left, right);
}

const checkSelfPalindrome = (a, left, right) => {
  while (left < right && a[left] === a[right]) {
    left++;
    right--;
  }
  return left >= right;
};





console.log(checkPalindromeFormation("x", "y")); // true
console.log(checkPalindromeFormation("abdef", "fecab")); // true
console.log(checkPalindromeFormation("ulacfd", "jizalu")); // true
