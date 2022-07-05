/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// 这个有问题
 var minMutation = function(start, end, bank) {
  if (!bank.length) return -1;
  if (start === end) return 1;

  const bankLen = bank.length;
  let minLen = 10e7;

  const replaceStr = (str, index, char) => (str.substring(0, index) + char + str.substring(index + 1));

  /**
   * @param {string} currGene 当前基因
   * @param {string[]} currBank 当前剩余基因库
  */
  const dfs = (currGene, currBank) => {
    if (currGene === end) minLen = Math.min(minLen, bankLen - currBank.length);

    // TODO 罗列currGene 可能的所有变化，并与 currBank 对比
    ['A', 'T', 'G', 'C'].forEach(item => {
      const currGeneArr = currGene.split('');
      currGeneArr.forEach((gene, idx) => {
        if (gene !== item) {
          // 替换为新基因
          const newGene = replaceStr(currGene, idx, item); // 替换

          // 只有变化后是基因库中的子项方进行 dfs
          if (currBank.includes(newGene)) {
            const newBank = currBank.filter(_ => _ !== newGene);
            console.log('gene = ', gene, ' & item = ', item , ' & newGene = ', newGene , ' & newBank = ', newBank, '\n');
            dfs(newGene, newBank);
          };
        }
      });
    });
  };

  dfs(start, bank);

  return minLen === 10e7 ? -1 : minLen;
};

// var minMutation = function (start, end, bank) { //一般广搜
//   let minlen = 10e7;
//   let len = start.length;

//   function dfs(arr, path) {
//     if (arr.join('') === end) minlen = Math.min(minlen, path.length);

//     for (let i = 0; i < len; i++) {
//       for (let k of ['A', 'C', 'G', 'T']) {
//         let prev = arr[i];
//         arr[i] = k;
//         let next = arr.join('');
//         if (bank.includes(next) && (!path.includes(next))) {
//           path.push(next);
//           dfs(arr, path);
//           path.pop();
//         }
//         arr[i] = prev;
//       }
//     }
//   }
//   dfs(start.split(''), []);
//   return minlen === 10e7 ? -1 : minlen;
// };

// var minMutation = function(start, end, bank) {//双向广搜
//   if(!~bank.indexOf(end)) return -1;
//   let minlen = 10e7;
//   let len = start.length;
//   let bankSet = new Set(bank);
//   function bfs(index,arr,path,eArr,ePath){
//       if(ePath.length<path.length) return bfs(index,eArr,ePath,arr,path);//少的优先搜索
//       for(let i=0;i<len;i++){
//           for(let k of ["A","C","G","T"]){
//               let prev = arr[i];
//               arr[i] = k;
//               let next = arr.join("");
//               if(bankSet.has(next) && (!~path.indexOf(next))){
//                   if(~ePath.indexOf(next)){ 
//                       //console.log(ePath,path,next);
//                       minlen = Math.min(minlen,(path.length+ePath.length-1));
//                       return;
//                   }
//                   path.push(next);
//                   bfs(index+1,arr,path,eArr,ePath);
//                   //path.pop();
//               }
//               arr[i] = prev;
//           }
//       }
//   }
//   bfs(0,start.split(""),[start],end.split(""),[end]);
//   return minlen===10e7?-1:minlen;
// };

// console.log(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])); // 1
// console.log(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])); // 2
// console.log(minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC','AAACCCCC','AACCCCCC'])); // 3
// console.log(minMutation('AACCGGTT', 'AACCGGTA', [])); // -1
// console.log(minMutation("AACCTTGG", "AATTCCGG", ["AATTCCGG","AACCTGGG","AACCCCGG","AACCTACC"])); // -1
console.log(minMutation("AAAACCCC", "CCCCCCCC", ["AAAACCCA","AAACCCCA","AACCCCCA","AACCCCCC","ACCCCCCC","CCCCCCCC","AAACCCCC","AACCCCCC"])); // 4

