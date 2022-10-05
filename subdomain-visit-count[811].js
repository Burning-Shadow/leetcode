/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const result = [];
  const counts = new Map();

  for (const cpdomain of cpdomains) {
    const space = cpdomain.indexOf(' ');
    const count = parseInt(cpdomain.slice(0, space));
    const domain = cpdomain.slice(space + 1);
    counts.set(domain, (counts.get(domain) || 0) + count);
    for (let i = 0; i < domain.length; i++) {
      if (domain[i] === '.') {
        const subdomain = domain.slice(i + 1);
        counts.set(subdomain, (counts.get(subdomain) || 0) + count);
      }
    }
  }

  for (const [subdomain, count] of counts.entries()) {
    result.push(count + " " + subdomain);
  }

  return result;
};


console.log(subdomainVisits(["9001 discuss.leetcode.com"])); // ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
