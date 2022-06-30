/**
解题思路
  首先要明白一个数能被3整除，那么这个数的每位和相加必然也能整除3
  结合题意，反过来思考
  我们构造出来的数就必然满足：
  1. 位和整除3
  2. 长度最长（这样才会更大）
  3. 字典序最大
  solve:
  首先1，2条件我们一块去考虑
  我们可以这样去思考，假设，我们最开始全选，我们考虑一下每位的累和后最后取余3的结果
  0：都可以选
  1：可以去除一个余数为1的数（必然存在这样一个数），就满足条件了
  2：同理,去除一个余数为2的数就可以了，但是可能会有一个余数为2的数都没有，这种情况，我们去除两个余数为1的数（必然存在）就可以了。
  考虑3（字典序最大）
  我们只需要去除的数字是最小的，我们选的所有数，在排个序，就能满足要求了
  最后处理全0，问题就解决了

  作者：ant-25
  链接：https://leetcode-cn.com/problems/largest-multiple-of-three/solution/tan-xin-by-ant-25/
  来源：力扣（LeetCode）
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 * */

/**
 * 最后实在是懒得优化代码了，先这么着吧，虽然写的很烂但思路是正确的，时间复杂度方面我再想想办法
 * */

function deleteMinNum(arr, remainder) {
  let i;
  for (i = arr.length - 1; i > -1; i--) {
    if (arr[i] % 3 === remainder) {
      arr.splice(i, 1);
      return arr.join("").toString();
    }
  }
  return -1;
}

function getSum(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

var largestMultipleOfThree = function (digits) {
  let num, remainder;

  digits.sort((a, b) => {
    return b - a;
  });

  let sum = getSum(digits);

  remainder = sum % 3;
  num = digits.join("");

  if (num == 0) {
    return "0";
  } else if (num >= 3) {
    if (remainder === 0) {
      return num.toString();
    } else if (remainder === 1) {
      let len = digits.length - 1,
        count = 2,
        i,
        result;

      // 余数为1，删除1个余数为1的数
      result = deleteMinNum(digits, remainder);
      if (result === -1) {
        // 余数为1，删除2个余数为2的数
        i = len;
        while (i > -1) {
          if (digits[i] % 3 === 2) {
            digits.splice(i, 1);
            if (count === 1) {
              return digits.join("").toString();
            } else {
              count--;
            }
          }
          i--;
        }
      } else {
        return result;
      }
    } else {
      let len = digits.length - 1,
        count = 2,
        i;

      // 余数为2，删除1个余数为2的数
      i = len;
      while (i > -1) {
        if (digits[i] % 3 === 2) {
          digits.splice(i, 1);
          return digits.join("").toString();
        }
        i--;
      }

      i = len;
      // 余数为2，删除2个余数为1的数
      while (count > 0 && i > -1) {
        if (digits[i] % 3 === 1) {
          digits.splice(i, 1);
          if (count === 1) {
            return digits.join("").toString();
          } else {
            count--;
          }
        }
        i--;
      }
    }
  } else {
    return "";
  }
};