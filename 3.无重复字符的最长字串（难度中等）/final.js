/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {


    if (s.length <= 1) {
        return s.length
    }

    let status; // indexOf判断的状态
    let maxLength = 1 // 最大长度
    let index = 1 // 当前下标
    let len = 1 // 当前串长度
    let str = [] // 缓存数组 
    str.push(s[0])

    while (s[index]) {
        status = str.indexOf(s[index])
        if (!(status + 1)) {
            str.push(s[index])
            index++
            len++
            if (maxLength < len) {
                maxLength = len
            }
        } else {
            str.push(s[index])
            str.splice(0, status + 1) // 从startIndex到status部分的元素全部抛弃
            len = str.length
            index++
        }
        // console.log(str)
        // console.log(maxLength)
    }
    return maxLength
};