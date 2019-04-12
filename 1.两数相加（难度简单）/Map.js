/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    nums.forEach((i, index) => {
        map[i] = index
    })
    for(let i = 0; i < nums.length; i++) {
        let sec = target - nums[i];
        if(!!map[sec] && map[sec] !== i){
            return [i, map[sec]]
        }
    }
    
};