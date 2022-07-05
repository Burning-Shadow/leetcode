/**
 * @param {string} s
 * @param {number[]} answers
 * @return {number}
 * 
 * 加法入栈，乘法将栈顶元素相乘后更新，亦可直接使用 eval 函数得到结果
 */
var scoreOfStudents = function (s, answers) {
  // const stack = [];
  const n = s.length;
  // // 计算正确答案
  // let preMultiply = false;
  // for (let i = 0; i < n; i++) {
  //   if (s[i] === '+') {
  //     preMultiply = false;
  //   } else if (s[i] === '*') {
  //     preMultiply = true;
  //   } else {
  //     if (preMultiply) {
  //       preMultiply = false;
  //       const lv = stack.pop();
  //       stack.push(lv * Number(s[i]));
  //     } else {
  //       stack.push(Number(s[i]));
  //     }
  //   }
  // }
  // const calcRes = stack.reduce((pre, cur) => pre + cur, 0);
  const calcRes = eval(s);

  // 区间 dp，计算 dp[i][j]，即第 i 个字符和第 j 个字符之间的所有可能结果
  const dp = new Array(n).fill(0).map(i => new Array(n).fill(0));
  for (let i = 0; i < n; i += 2) dp[i][i] = [Number(s[i])];

  for (let L = 2; L < n; L += 2) {
    for (let i = 0; i <= n - L; i += 2) {
      const end = i + L;
      const values = [];
      for (let j = i + 1; j < end; j += 2) {
        const left = dp[i][j - 1];
        const right = dp[j + 1][end];
        for (let left1 of left) {
          for (let right1 of right) {
            const calc = s[j] === '+' ? left1 + right1 : left1 * right1;
            if (calc <= 1000) {
              values.push(calc);
            }
          }
        }
      }
      dp[i][end] = [...new Set(values)];
    }
  }

  // 计算所有人得分
  let res = 0;
  for (let i = 0; i < answers.length; i++) {
    if (calcRes === answers[i]) {
      res += 5;
    } else if (dp[0][n - 1].includes(answers[i])) {
      res += 2;
    }
  }
  return res;
};


console.log(scoreOfStudents("7+3*1*2", [20, 13, 42])); // 7
console.log(scoreOfStudents("3+5*2", [13, 0, 10, 13, 13, 16, 16])); // 19
console.log(scoreOfStudents("6+0*1", [12, 9, 6, 4, 8, 6])); // 10