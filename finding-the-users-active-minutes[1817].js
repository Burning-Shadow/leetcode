/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const activeMinutes = new Map();
  for (const [id, time] of logs) {
    if (!activeMinutes.has(id)) {
      activeMinutes.set(id, new Set());
    }
    activeMinutes.get(id).add(time);
  }
  const answer = new Array(k).fill(0);
  for (const minutes of activeMinutes.values()) {
    const activeCount = minutes.size;
    answer[activeCount - 1]++;
  }
  return answer;
};





console.log(findingUsersActiveMinutes([[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], 5)); // [0,2,0,0,0]
console.log(findingUsersActiveMinutes([[1, 1], [2, 2], [2, 3]], 4)); // [1,1,0,0]
