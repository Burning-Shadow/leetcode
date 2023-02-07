/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const timeMap = new Map();
  const len = keyName.length;
  for (let i = 0; i < len; i++) {
    const name = keyName[i];
    const time = keyTime[i];
    if (!timeMap.has(name)) {
      timeMap.set(name, []);
    }
    const hour = (time[0].charCodeAt() - '0'.charCodeAt()) * 10 + (time[1].charCodeAt() - '0'.charCodeAt());
    const minute = (time[3].charCodeAt() - '0'.charCodeAt()) * 10 + (time[4].charCodeAt() - '0'.charCodeAt());
    timeMap.get(name).push(hour * 60 + minute);
  }
  let result = [];
  const keySet = timeMap.keys();
  for (const name of keySet) {
    const list = timeMap.get(name);
    list.sort((a, b) => a - b);
    const size = list.length;
    for (let i = 2; i < size; i++) {
      const time1 = list[i - 2], time2 = list[i];
      const difference = time2 - time1;
      if (difference <= 60) {
        result.push(name);
        break;
      }
    }
  }
  result.sort();
  return result;
};





console.log(alertNames(["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"])); // ["daniel"]
console.log(alertNames(["alice", "alice", "alice", "bob", "bob", "bob", "bob"], ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"])); // ["bob"]
console.log(alertNames(["john", "john", "john"], ["23:58", "23:59", "00:01"])); // []
console.log(alertNames(["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"], ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"])); // ["clare","leslie"]
