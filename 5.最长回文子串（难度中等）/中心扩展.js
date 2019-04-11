/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s == '' || s.length == 1){
    return s
  }
  
  let len = 0
  let len1, len2, finalStart, str
  let start = 0, end = 0
  
  for(let i=1; i<s.length; i++){
    len1 = expandAroundCenter(s, i, i)
    len2 = expandAroundCenter(s, i, i+1)
    nowLength = Math.max(len1, len2)
    len = Math.max(len, nowLength)
    
    if(len > end-start && nowLength == len){
      start = i - Math.floor((len-1)/2)
      end = i + Math.floor((len)/2)
    }
  }
  
  str = s.slice(start, len+1)
  return str
};

function expandAroundCenter(s, left, right){
  let L = left
  let R = right
  
  while(L>=0 && R<=s.length && s[L] == s[R]){
    L--
    R++
  }
  return R-L-1
}