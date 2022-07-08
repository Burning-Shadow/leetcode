/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
	const MAX = 2147483647
	let res = 0,
		negativeSymbol = 1; // 正负号，默认正号
	// 把首尾的空格都去掉
	s = s.trim();
	for (let i = 0; i < s.length; i++) {
		if (i === 0 && s[i] === "-") {
			negativeSymbol = -1;
			continue;
		} else if (i === 0 && s[i] === "+") continue;
		// 因为空格会被转成0，所以要排除空格的情况，也就是说在数字范围内就加上
		if (s[i] >= 0 && s[i] <= 9 && s[i] !== " ") {
			res = res * 10 + (s[i] - 0);
			// 若溢出则直接跳出
			if (res * negativeSymbol <= -(MAX + 1)) return -(MAX + 1);
			else if (res * negativeSymbol >= MAX) return MAX;
		} else break;
	}
	return res * negativeSymbol;
};

// var myAtoi = function(s) {
// 	const re = new RegExp(/^(-|\+)?\d+/);
// 	let str = s.trim().match(re);
// 	let res = str ? Number(str[0]) : 0;
// 	return res >= 0 ? Math.min(res, 2**31 - 1) : Math.max(res, -(2**31))
// };

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193