/**
 * 
 * 本题采取经典的双指针方式，一前一后两根指针用以较准，而高度较短的那一只向中间移动，并循环迭代以找出最大值
 * 
 * /

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let x1 = 0, 
    x2 = height.length - 1, 
    maxX1 = 0,
    maxX2 = height.length - 1,
    maxVolume = (height.length - 1) * Math.min(height[0], height[height.length - 1]),
    volume;

  while(x1 < x2){
    height[x1] < height[x2]? x1++: x2--;
    volume = Math.min(height[x1], height[x2]) * (x2 - x1);
    if(volume > maxVolume){
      maxX1 = x1;
      maxX2 = x2;
      maxVolume = volume;
    }
  }

  return maxVolume;
};