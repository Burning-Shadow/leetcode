/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s.length <= 1) {
        return s.length
    }

    let maxLength = 1 // 最大长度
    let start = s[0] // 起始位置
    let startIndex = 0 // 起始下标
    let index = 1 // 当前下标
    let item = s[index] // 当前值
    let len = 1 // 当前串长度
    let str = s.slice(0, 1) // 缓存数组 

    while (s[index]) {
        if (!(str.indexOf(item) + 1)) {
            index++
            len++
            maxLength = (maxLength > len) ? maxLength : len
            item = s[index]
            str = s.slice(startIndex, index)

        } else {
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