/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const index = new Map();
  const n = names.length;
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const name = names[i];
    if (!index.has(name)) {
      res[i] = name;
      index.set(name, 1);
    } else {
      let k = index.get(name);
      while (index.has(addSuffix(name, k))) {
        k++;
      }
      res[i] = addSuffix(name, k);
      index.set(name, k + 1);
      index.set(addSuffix(name, k), 1);
    }
  }
  return res;
}

const addSuffix = (name, k) => {
  return name + "(" + k + ")";
};






console.log(getFolderNames(["gta","gta(1)","gta","avalon"])); // ["gta","gta(1)","gta(2)","avalon"]
console.log(getFolderNames(["pes","fifa","gta","pes(2019)"])); // ["pes","fifa","gta","pes(2019)"]
console.log(getFolderNames(["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece"])); // ["onepiece","onepiece(1)","onepiece(2)","onepiece(3)","onepiece(4)"]
console.log(getFolderNames(["wano","wano","wano","wano"])); // ["wano","wano(1)","wano(2)","wano(3)"]
console.log(getFolderNames(["kaido","kaido(1)","kaido","kaido(1)"])); // ["kaido","kaido(1)","kaido(2)","kaido(1)(1)"]
