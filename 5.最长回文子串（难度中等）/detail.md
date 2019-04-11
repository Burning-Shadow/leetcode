### 最长回文子串

给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

**示例 1：**

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

**示例 2：**

```
输入: "cbbd"
输出: "bb"
```

### 解

#### 中心扩展

我们可以从回文串中间开始，不断的向两端延伸，直至非回文串为止返回其长度。用一个`for`循环将其遍历，并最终将其`finalStart(最终串起始位置)`更新。输出时用`slice`截取一下就好啦。

```javascript
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
```

但是莫名其妙，没有通过，报了一个执行出错。

它出错的测试用例是这个

```
最后执行的输入：
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"


执行出错信息：
Line ?: ?
```

这个具体怎么错了我也没整明白，算是留个坑以后再想8。

#### 动态规划1.0

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;
  let result;
  let i,j,L;
  let dp=Array(len).fill(0).map(x=>Array(len).fill(0));
  //console.log(dp);
  if(len<=1){
    return s
  }
  // 只有一个字符的情况是回文
  for(i = 0;i<len;i++){
    dp[i][i] = 1
    result = s[i]
  }

  // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
  // i     j
  // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
  for ( L = 2; L <= len; L++) {
    // 从0开始
    for ( i = 0; i <= len - L; i++) {
      j = i + L - 1;
      if(L == 2 && s[i] == s[j]) {
        dp[i][j] = 1;
        result = s.slice(i, i + L);
      }else if(s[i] == s[j] && dp[i + 1][j - 1] == 1) {
        dp[i][j] = 1
        result = s.slice(i, i + L);
      }
    }
  }
  //console.log(result);
  return result;
}
```

还是执行出错，最后输入和错误信息都一模一样，真的让人有点摸不着头脑。

#### 动态规划2.0

这个用时`1104ms`，击败了`19.55%`的用户

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start = 0; 
    var maxlength = 0;
    var p = []
    for(var i = 0; i < s.length; i++){
        for(var j = 0; j < i + 1; j++){
            if(p[j] === undefined) {
                p[j] = []
            }
            if(i - j < 2){ 
                p[j][i] = s[i] === s[j];
            } else {
                p[j][i] = (p[j + 1][i-1] && s[j] === s[i]); 
            }
            if(p[j][i] && maxlength < i -j + 1) { //判断为回文串且长度大于最大
                start = j;
                maxlength = i -j + 1
            }
        }
    }
    return s.substr(start, maxlength)
};
```

#### final

最后看一个执行时间为`124ms`的范例。

```
/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str='$#';
    var p={};
    var mx=0, id, max_len = 0, max_id;
    for (var i=0;i<s.length;i++) {
        str+= s[i] + '#';
    }
    console.log(str);
    for (i=1;i<str.length;i++) {
        if (mx>i) {
            p[i]= Math.min(p[2*id-i],mx -i);
        } else {
            p[i]= 1;
        }
        while (str[i + p[i]] == str[i - p[i]]) {
               p[i]++;
        }
        if (i+p[i]>mx) {
            mx=i+p[i];
            id=i;
        }
        if ( p[i]>max_len ) {
           max_len = p[i]-1;
           max_id = i;
        }
    }
    return s.slice(
            Math.floor((max_id-max_len)/2), Math.floor((max_id + max_len) / 2)
    );
};
```

