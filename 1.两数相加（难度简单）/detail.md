### 两数求和

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

### 暴力法

```javascript
  var arr = []
  for(let i=0; i<nums.length-1; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i] + nums[j] == target){
        arr.push(i, j)
        return arr
      }
    }
  }
};
```

### 60ms

```javascript
var twoSum = function(nums, target) {
    let map = {};
    // 改为值-键模式
    nums.forEach((i, index) => {
        map[i] = index
    })
    // 反向判断
    for(let i = 0; i < nums.length; i++) {
        let sec = target - nums[i];
        if(!!map[sec] && map[sec] !== i){
            return [i, map[sec]]
        }
    }
};
```

### 56ms

这个思路最轻巧，把复杂度降低了一个维度

```javascript
var twoSum = function(nums, target) {
    var len = nums.length;
    var hash = {};
    for (var i=0; i<len; i++) {
        var temp = hash[target - nums[i]];
        if (temp !== undefined) {
            return [temp, i];
        }
        hash[nums[i]] = i;
    }
};
```

