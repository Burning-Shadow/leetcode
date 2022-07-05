/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const result = [];
  let hasNewRecipe = true;

  while (hasNewRecipe) {
    hasNewRecipe = false;

    for (let i = 0; i < ingredients.length; i++) {
      let suppliesReady = true;
      for (let j = 0; j < ingredients[i].length; j++) {
        if (!supplies.includes(ingredients[i][j])) {
          suppliesReady = false;
          break;
        }
      }
      if (suppliesReady) {
        result.push(recipes[i]);
        supplies.push(recipes[i]);
        recipes.splice(i, 1);
        ingredients.splice(i, 1);
        hasNewRecipe = true;
      }
    }
  }

  return result;
};

console.log(findAllRecipes(
  ["bread"],
  [
    ["yeast", "flour"]
  ],
  ["yeast", "flour", "corn"]
)); // ["bread"]

console.log(findAllRecipes(
  ["bread", "sandwich"],
  [
    ["yeast", "flour"],
    ["bread", "meat"]
  ],
  ["yeast", "flour", "meat"]
)); // ["bread","sandwich"]

console.log(findAllRecipes(
  ["bread", "sandwich", "burger"],
  [
    ["yeast", "flour"],
    ["bread", "meat"],
    ["sandwich", "meat", "bread"]
  ],
  ["yeast", "flour", "meat"]
)); // ["bread","sandwich","burger"]

console.log(findAllRecipes(
  ["bread"],
  [
    ["yeast", "flour"]
  ],
  ["yeast"]
)); // []

console.log(findAllRecipes(
  ["xevvq","izcad","p","we","bxgnm","vpio","i","hjvu","igi","anp","tokfq","z","kwdmb","g","qb","q","b","hthy"],
  [
    ["wbjr"],
    ["otr","fzr","g"],
    ["fzr","wi","otr","xgp","wbjr","igi","b"],
    ["fzr","xgp","wi","otr","tokfq","izcad","igi","xevvq","i","anp"],
    ["wi","xgp","wbjr"],
    ["wbjr","bxgnm","i","b","hjvu","izcad","igi","z","g"],
    ["xgp","otr","wbjr"],
    ["wbjr","otr"],
    ["wbjr","otr","fzr","wi","xgp","hjvu","tokfq","z","kwdmb"],
    ["xgp","wi","wbjr","bxgnm","izcad","p","xevvq"],
    ["bxgnm"],
    ["wi","fzr","otr","wbjr"],
    ["wbjr","wi","fzr","xgp","otr","g","b","p"],
    ["otr","fzr","xgp","wbjr"],
    ["xgp","wbjr","q","vpio","tokfq","we"],
    ["wbjr","wi","xgp","we"],
    ["wbjr"],
    ["wi"]
  ],
  ["wi","otr","wbjr","fzr","xgp"]
)); // ["xevvq","izcad","bxgnm","i","hjvu","tokfq","z","g","b","hthy"]