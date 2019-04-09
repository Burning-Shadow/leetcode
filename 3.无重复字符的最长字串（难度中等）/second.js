/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s.length <= 1) {
        return s.length
    }

    let maxLength = 1 // 最大长度
    let index = 1 // 当前下标
    let len = 1 // 当前串长度
    let str = [] // 缓存数组 
    str.push(s[0])

    while (s[index]) {

        if (!(str.indexOf(s[index]) + 1)) {
            str.push(s[index])
            index++
            len++
            if (maxLength < len) {
                maxLength = len
            }
        } else {
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