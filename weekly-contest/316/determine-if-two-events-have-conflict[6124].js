/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  const revert = (timeStr) => {
    const arr = timeStr.split(':');
    const [hour, min] = arr;
    return Number(hour) * 60 + Number(min);
  };
  const [time1Start, time1End] = [revert(event1[0]), revert(event1[1])];
  const [time2Start, time2End] = [revert(event2[0]), revert(event2[1])];

  return !((time1End < time2Start) || time2End < time1Start);
};

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 * 
 * 看到茶神的视频后发觉其实单比字符串亦可
 */
 var haveConflict = function (event1, event2) {
  const [time1Start, time1End] = event1;
  const [time2Start, time2End] = event2;

  return !((time1End < time2Start) || time2End < time1Start);
};


console.log(haveConflict(["01:15", "02:00"], ["02:00", "03:00"])); // true
console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"])); // true
console.log(haveConflict(["10:00", "11:00"], ["14:00", "15:00"])); // false