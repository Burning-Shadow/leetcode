/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  this.foods = foods;
  this.cuisines = cuisines;
  this.ratings = ratings;
  const n = foods.length;
  const indexes = {};
  const map = {};
  for (let i = 0; i < n; i++) {
    const name = foods[i];
    const c = cuisines[i];
    map[c] = map[c] || new MaxHeap(foods, ratings);
    map[c].insert(i);
    indexes[name] = i;
  }
  this.map = map;
  this.indexes = indexes;
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  const { indexes, foods, ratings, map, cuisines } = this;
  const idx = indexes[food];
  ratings[idx] = newRating;
  const heap = map[cuisines[idx]];
  heap.update(idx, newRating);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const { map, foods } = this;
  return foods[map[cuisine].max()];
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */

/* 大顶堆 */
class MaxHeap {
  constructor(foods, ratings) {
    this.arr = [-1]; // Array<质量>
    this.foods = foods;
    this.ratings = ratings;
  }
  insert(x) {
    this.arr.push(x);
    this.swim(this.arr.length - 1);
  }
  update(idx, newRating) {
    const { arr } = this;
    const index = arr.findIndex((it) => it === idx);
    if (index === -1) {
      return;
    }
    arr.splice(index, 1);
    this.ratings[idx] = newRating;
    this.insert(idx);

    // 得分更改，重排堆中元素
    let j = arr.length - 1;
    while (j > 0) {
      this.swim(j);
      j--;
    }
  }
  swim(i) {
    const parent = this.parent;
    while (parent(i) > 0 && this.more(i, parent(i))) {
      this.swap(i, parent(i));
      i = parent(i);
    }
  }
  max() {
    return this.arr[1];
  }
  sink(i) {
    const { left, right, arr } = this;
    const n = arr.length;
    while (left(i) < n) {
      let temp = i;
      if (this.more(left(i), temp)) temp = left(i);
      if (right(i) < n && this.more(right(i), temp)) temp = right(i);
      if (i === temp) {
        break;
      }
      this.swap(i, temp);
      i = temp;
    }
  }
  more(i, j) {
    const { foods, ratings, arr } = this;
    if (ratings[arr[i]] !== ratings[arr[j]]) {
      return ratings[arr[i]] > ratings[arr[j]];
    }
    if (foods[arr[i]] < foods[arr[j]]) {
      return true;
    }
    return false;
  }
  parent(i) {
    return i >> 1;
  }
  swap(i, j) {
    const { arr } = this;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  left(i) {
    return i * 2;
  }
  right(i) {
    return i * 2 + 1;
  }
  get size() {
    return this.arr.length - 1;
  }
}





const foodRatings = new FoodRatings(
  ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
  ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
  [9, 12, 8, 15, 14, 7]
);
console.log(foodRatings.highestRated("korean")); // 返回 "kimchi"
// "kimchi" 是分数最高的韩式料理，评分为 9 。
console.log(foodRatings.highestRated("japanese")); // 返回 "ramen"
// "ramen" 是分数最高的日式料理，评分为 14 。
console.log(foodRatings.changeRating("sushi", 16)); // "sushi" 现在评分变更为 16 。
console.log(foodRatings.highestRated("japanese")); // 返回 "sushi"
// "sushi" 是分数最高的日式料理，评分为 16 。
console.log(foodRatings.changeRating("ramen", 16)); // "ramen" 现在评分变更为 16 。
console.log(foodRatings.highestRated("japanese")); // 返回 "ramen"
                                       // "sushi" 和 "ramen" 的评分都是 16 。
                                       // 但是，"ramen" 的字典序比 "sushi" 更小。