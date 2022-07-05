/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let set = new UnionFindSet(); // union-find set
  let emailToName = new Map(); // email -> name hashmap

  for (let i of accounts) {
    let name = i[0];
    for (let j = 1; j < i.length; j++) {
      if (!emailToName.has(i[j])) emailToName.set(i[j], name);
      set.add(i[j]);
      if (j > 1) set.merge(i[j], i[j - 1]);
    }
  }

  let res = new Map();
  for (let [email, name] of emailToName) {
    let p = set.findParent(email);
    if (!res.has(p)) res.set(p, [email]);
    else res.get(p).push(email);
  }
  let r = [];
  for (let [k, v] of res) {
    r.push([emailToName.get(k), ...v.sort()]);
  }
  return r;
};

class UnionFindSet {
  constructor(arr = []) {
    this.map = new Map();
    this.size = arr.length;
    for (let i of arr) {
      this.map.set(i, {
        parent: i,
        rank: 1,
      });
    }
  }
  add(e) {
    if (this.map.has(e)) return;
    this.map.set(e, {
      parent: e,
      rank: 1,
    });
    this.size += 1;
  }
  findParent(e) {
    if (!this.map.has(e)) return null;
    if (this.map.get(e).parent === e) return e;
    let p = this.findParent(this.map.get(e).parent);
    this.map.get(e).parent = p;
    return p;
  }
  isSame(a, b) {
    return this.findParent(a) === this.findParent(b);
  }
  has(e) {
    return this.map.has(e);
  }
  merge(a, b) {
    let p1 = this.findParent(a);
    let p2 = this.findParent(b);
    if (p1 === p2) return;
    let r1 = this.map.get(p1).rank;
    let r2 = this.map.get(p2).rank;
    if (r1 <= r2) {
      this.map.get(p1).parent = p2;
      if (r1 === r2) this.map.get(p2).rank += 1;
    } else {
      this.map.get(p2).parent = p1;
    }
    this.size -= 1;
  }
}

console.log(accountsMerge([
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["John", "johnnybravo@mail.com"],
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["Mary", "mary@mail.com"]
]));
// [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]

console.log(accountsMerge([
  ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe1@m.co"],
  ["Kevin", "Kevin3@m.co", "Kevin5@m.co", "Kevin0@m.co"],
  ["Ethan", "Ethan5@m.co", "Ethan4@m.co", "Ethan0@m.co"],
  ["Hanzo", "Hanzo3@m.co", "Hanzo1@m.co", "Hanzo0@m.co"],
  ["Fern", "Fern5@m.co", "Fern1@m.co", "Fern0@m.co"]
]));
// [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]