/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * 
 * 查并集
 */
// var validPath = function (n, edges, source, destination) {
// 	const v = Array(n).fill(0).map((_, i) => i);
// 	const find = a => {
// 		while (v[a] !== a) a = v[a];
// 		return a;
// 	}
// 	const union = (a, b) => {
// 		v[find(a)] = find(b);
// 	}
// 	edges.forEach(([a, b]) => union(a, b));
// 	return find(source) === find(destination);
// };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * 
 * dfs
 */
var validPath = function (n, edges, source, destination) {
	// 创建一个二维数组 结点 -> 下一个可访问到的结点(数组)
	const path = new Array(n).fill(0).map(() => new Array());
	// 记录是否访问过
	const visited = new Set();

	for (const [from, to] of edges) {
		// 双向图
		path[from].push(to);
		path[to].push(from);
	}

	console.log(path);

	const dfs = function (path, source) {
		if (source === destination) return true;
		// 添加访问过的结点
		visited.add(source);
		for (const value of path[source]) {
			if (!visited.has(value) && dfs(path, value)) return true;
		}

		return false;
	}

	return dfs(path, source);
};

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2)); // true
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5)); // false
console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9)); // true
console.log(validPath(10, [[0, 7], [0, 8], [6, 1], [2, 0], [0, 4], [5, 8], [4, 7], [1, 3], [3, 5], [6, 5]], 7, 5)); // true