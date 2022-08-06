/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  function checkIPv4(ip) {
    const ipArr = ip.split('.');
    if (ipArr.length !== 4) return 'Neither';

    return ipArr.reduce((result, current) => {
      if (current.length === 1) return result;
      else {
        return current[0] !== '0'
          && parseInt(current, 10) >= 10
          && parseInt(current, 10) <= 255
          ? result : 'Neither';
      }
    }, 'IPv4');
  }
  function checkIPv6(ip) {
    const ipArr = ip.split(':');
    if (ipArr.length !== 8) return 'Neither';

    return ipArr.reduce((result, current) => {
      return /^[A-Fa-f0-9]{1,4}$/.test(current) ? result : 'Neither';
    }, 'IPv6');
  }

  return checkIPv4(queryIP) === 'IPv4' ? 'IPv4' : checkIPv6(queryIP);
};

console.log(validIPAddress("172.16.254.1")); // IPv4
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")); // IPv6
console.log(validIPAddress("256.256.256.256")); // Neither