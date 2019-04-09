### 写在前面

用一张图来表示我艰辛的 AC 历程

![](https://pic.superbed.cn/item/5cac51373a213b0417ede8f9)

### 题目描述

给定一个字符串，请你找出其中不含有重复字符的 **最长子串** 的长度。

**示例 1:**

```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2:**

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3:**

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

### 解

读到此题我开始比较傻，单盯着第一个测试样例看，于是造成了这一系列的错误情况，之后把眼界稍微放宽一点，才逐渐在被执行系统捶的过程中总结规律，最后完成。那么看一下总体的思路吧。

#### 第一个坑

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    if(s.length <= 1){
        return s.length
    }
    
    let maxLength = 1       // 最大长度
    let start = s[0]        // 起始位置
    let startIndex = 0      // 起始下标
    let index = 1           // 当前下标
    let item = s[index]     // 当前值
    let len = 1             // 当前串长度
    let str = s.slice(0, 1) // 缓存数组 
    
    while(s[index]){
        if(!(str.indexOf(item) + 1)){
            index++
            len++
            maxLength = (maxLength>len)? maxLength: len
            item = s[index]
            str = s.slice(startIndex, index)
            
        }else{
            len = 1
            start = item
            startIndex = index
            index++
            item = s[index]
            str = s.slice(startIndex, index)
        }
        console.log(str)
    }
    return maxLength
};
```

第一次提交，卡在了`"dvdf"`。这东西要求输出`3`而咱是`2`。打印一下。

```
dv
d
df
```

原来是咱们的思路有问题。一旦出现了不同的串那么就自动放弃`str`重新开辟，自然是没办法解决这种问题的。所以我们不妨换一种思路，将`startIndex`指针向后移一位，再进行判别是不是会好很多呢？

#### 第二个坑

有了上次的教训我们不妨将`startIndex`指针向后移一位。但是这一吃一吐的样子不正好是个栈么？所以咱们干脆改一下，把`startIndex`这玩意儿甩掉。

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  if(s.length <= 1){
    return s.length
  }

  let maxLength = 1       // 最大长度
  let index = 1           // 当前下标
  let len = 1             // 当前串长度
  let str = []            // 缓存数组 
  str.push(s[0])

  while(s[index]){
    
    if(!(str.indexOf(s[index]) + 1)){
      str.push(s[index])
      index++
      len++
      if(maxLength < len){
        maxLength = len
      }
    }else{
      len = 2
      str.push(s[index])
      str.shift()
      index++
    }
    console.log(str)
  }
  // console.log(index)
  return maxLength
  
};
```

然而卡在了另外一个测试用例上——`pwwkew`。打印一下

```
[ 'p', 'w' ]
[ 'w', 'w' ]
[ 'w', 'w', 'k' ]
[ 'w', 'w', 'k', 'e' ]
[ 'w', 'k', 'e', 'w' ]
```

仔细想想，出现这问题的原因不就是我们只对第一个数进行`shift()`吗？但是重复的并不一定是第一个啊，所以我们需要从重复的部分开始进行截取。

#### 完成版

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    
  if(s.length <= 1){
    return s.length
  }

  let status;             // indexOf判断的状态
  let maxLength = 1       // 最大长度
  let index = 1           // 当前下标
  let len = 1             // 当前串长度
  let str = []            // 缓存数组 
  str.push(s[0])

  while(s[index]){
    status = str.indexOf(s[index])
    if(!(status + 1)){
      str.push(s[index])
      index++
      len++
      if(maxLength < len){
        maxLength = len
      }
    }else{
      str.push(s[index])
      str.splice(0, status+1)   // 从startIndex到status部分的元素全部抛弃
      len = str.length
      index++
    }
    // console.log(str)
    // console.log(maxLength)
  }
  return maxLength
};
```

最终思路：

我们分为两段：一段是迭代数组`str`，一段是传入的数组`s`。再加一个`index`指针用来指向当前所判断的元素。

每当在`str`中发现`index`所指的元素那么我们放弃从开头到`status`的一段并将`s[index]` push 进入数组中，因为必须从那部分开始才算是新的、不包含重复字符串的数组。

若未发现则代表此值可以被算进`str`，那么将`s[index]` push 进`str`并将`index`指针后移。

至于其他参数已经标注在定义后边了，大家伙儿自己琢磨一下吧~

#### 最终版

最后放上一个`88ms`执行时间的大佬写的代码供大家瞻仰

```javascript
var lengthOfLongestSubstring = function(s) {
    var maxLen,
        l,
        r,
        i;
        
    if (s.length < 2) {
        return s.length;
    }
    
    maxLen = 0;
    
    for (l = 0, r = 1; r < s.length; r++) {
        i = s.lastIndexOf(s[r], r-1);
        if (i >= 0) {
            maxLen = Math.max(maxLen, r - l);
            l = Math.max(l, i + 1);
        }
    }
    return Math.max(maxLen, r - l);
};
```

果然还是要多用库函数啊