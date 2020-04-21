/**
 * 未考虑到需要删除两个数的情况，整体解法不适用于此
 */

function deleteMinNum(arr, remainder){
  let i;
  for(i=arr.length-1; i>-1; i--){
    if(arr[i] % 3 === remainder){
      arr.splice(i, 1);
      if(getSum(arr) % 3 === 0){
        return arr.join("").toString();
      }
    }
  }
  return "";
}

function getSum(arr){
  return arr.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
  });
}

var largestMultipleOfThree = function(digits) {
   let num, remainder;

  digits.sort((a, b)=>{
    return b-a;
  });

  let sum = getSum(digits);

  remainder = sum % 3;
  num = digits.join("");

  if(num == 0){
    return "0";
  } else if(num >= 3){
    if(remainder === 0){
      return num.toString();
    } else {
      return deleteMinNum(digits, remainder);
    }
  } else {
    return "";
  }
};