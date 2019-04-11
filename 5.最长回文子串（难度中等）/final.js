/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str = '$#';
    var p = {};
    var mx = 0,
        id, max_len = 0,
        max_id;
    for (var i = 0; i < s.length; i++) {
        str += s[i] + '#';
    }
    console.log(str);
    for (i = 1; i < str.length; i++) {
        if (mx > i) {
            p[i] = Math.min(p[2 * id - i], mx - i);
        } else {
            p[i] = 1;
        }
        while (str[i + p[i]] == str[i - p[i]]) {
            p[i]++;
        }
        if (i + p[i] > mx) {
            mx = i + p[i];
            id = i;
        }
        if (p[i] > max_len) {
            max_len = p[i] - 1;
            max_id = i;
        }
    }
    return s.slice(
        Math.floor((max_id - max_len) / 2), Math.floor((max_id + max_len) / 2)
    );
};