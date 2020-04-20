/**
 * @param {number} num
 * @return {number[]}
 */

/**
 * 
 * 开根后递减，可被整除则符合条件
 * 
 *  */

function differAbs(point, num, addCount){
  while((num + addCount) % point && point >= 1){
    point--;
  }
  return [point, (num + addCount)/point]
}

var closestDivisors = function(num) {
  let xPoint = Math.ceil(Math.sqrt(num + 1)), 
    yPoint = Math.ceil(Math.sqrt(num + 2)), 
    xDifferArr,
    yDefferArr;

  if(!((num + 1)%xPoint) && xPoint>1){
    return [xPoint, (num + 1) / xPoint]
  }
  if(!((num + 2)%yPoint) && yPoint>1){
    return [yPoint, (num + 2) / yPoint]
  }

  xDifferArr = differAbs(xPoint, num, 1);
  yDifferArr = differAbs(yPoint, num, 2);

  if(Math.abs(xDifferArr[0] - xDifferArr[1]) < Math.abs(yDifferArr[0] - yDifferArr[1])){
    return xDifferArr;
  }
  return yDifferArr
};