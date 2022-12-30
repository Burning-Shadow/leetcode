

/**
 * @param {number} n
 */
class ExamRoom {
  #n;
  constructor(n) {
    this.#seats = new AvlTree((a, b) => a - b);
    this.#pq = new Heap((a, b) => {
      const d1 = a[1] - a[0],
        d2 = b[1] - b[0];
      const x = Math.floor(d1 / 2);
      const y = Math.floor(d2 / 2);
      return x < y || (x == y && a[0] > b[0]) ? 1 : -1;
    });
    this.#n = n;
  }

  #seats;
  #pq;
  /**
   * @return {number}
   */
  seat() {
    const n = this.#n;
    if (this.#seats.count() === 0) {
      this.#seats.insert(0);
      return 0;
    }
    const left = this.#seats.min()?.getValue() ?? 0,
      right = this.#n - 1 - (this.#seats.max()?.getValue() ?? 0);
    const seats = this.#seats;
    const pq = this.#pq;
    while (seats.count() >= 2) {
      const p = pq.top();
      if (
        seats.has(p[0]) &&
        seats.has(p[1]) &&
        seats.upperBound(p[0], false)?.getValue() == p[1]
      ) {
        const d = p[1] - p[0];
        if (Math.floor(d / 2) < right || Math.floor(d / 2) <= left) {
          break;
        }
        pq.pop();
        pq.push([p[0], p[0] + Math.floor(d / 2)]);
        pq.push([p[0] + Math.floor(d / 2), p[1]]);
        seats.insert(p[0] + Math.floor(d / 2));
        return Math.floor(p[0] + d / 2);
      }
      pq.pop();
    }
    if (right > left) {
      pq.push([seats.max()?.getValue() ?? 0, n - 1]);
      seats.insert(n - 1);
      return n - 1;
    } else {
      pq.push([0, seats.min()?.getValue() ?? 0]);
      seats.insert(0);
      return 0;
    }
  }

  /** 
   * @param {number} p
   * @return {void}
   */
  leave(p) {
    const seats = this.#seats;
    const pq = this.#pq;
    if (
      p != (seats.min()?.getValue() ?? 0) &&
      (p != seats.max()?.getValue() ?? 0)
    ) {
      const prev = seats.lowerBound(p, false)?.getValue() ?? 0,
        next = seats.upperBound(p, false)?.getValue() ?? 0;
      pq.push([prev, next]);
    }
    seats.remove(p);
  }
}

const Heap = (() => {
  var t = {},
    e = {};
  class i {
    constructor(t, e, i) {
      if ("function" != typeof t)
        throw new Error("Heap constructor expects a compare function");
      (this._compare = t),
        (this._nodes = Array.isArray(e) ? e : []),
        (this._leaf = i || null);
    }
    _hasLeftChild(t) {
      return 2 * t + 1 < this.size();
    }
    _hasRightChild(t) {
      return 2 * t + 2 < this.size();
    }
    _compareAt(t, e) {
      return this._compare(this._nodes[t], this._nodes[e]);
    }
    _swap(t, e) {
      const i = this._nodes[t];
      (this._nodes[t] = this._nodes[e]), (this._nodes[e] = i);
    }
    _shouldSwap(t, e) {
      return (
        !(t < 0 || t >= this.size()) &&
        !(e < 0 || e >= this.size()) &&
        this._compareAt(t, e) > 0
      );
    }
    _compareChildrenOf(t) {
      if (!this._hasLeftChild(t) && !this._hasRightChild(t)) return -1;
      const e = 2 * t + 1,
        i = 2 * t + 2;
      if (!this._hasLeftChild(t)) return i;
      if (!this._hasRightChild(t)) return e;
      return this._compareAt(e, i) > 0 ? i : e;
    }
    _compareChildrenBefore(t, e, i) {
      return this._compareAt(i, e) <= 0 && i < t ? i : e;
    }
    _heapifyUp(t) {
      let e = t,
        i = Math.floor((e - 1) / 2);
      for (; this._shouldSwap(i, e);)
        this._swap(i, e), (e = i), (i = Math.floor((e - 1) / 2));
    }
    _heapifyDown(t) {
      let e = t,
        i = this._compareChildrenOf(e);
      for (; this._shouldSwap(e, i);)
        this._swap(e, i), (e = i), (i = this._compareChildrenOf(e));
    }
    _heapifyDownUntil(t) {
      let e,
        i = 0,
        r = 1,
        s = 2;
      for (; r < t;)
        (e = this._compareChildrenBefore(t, r, s)),
          this._shouldSwap(i, e) && this._swap(i, e),
          (i = e),
          (r = 2 * i + 1),
          (s = 2 * i + 2);
    }
    insert(t) {
      return (
        this._nodes.push(t),
        this._heapifyUp(this.size() - 1),
        (null === this._leaf || this._compare(t, this._leaf) > 0) &&
        (this._leaf = t),
        this
      );
    }
    push(t) {
      return this.insert(t);
    }
    extractRoot() {
      if (this.isEmpty()) return null;
      const t = this.root();
      return (
        (this._nodes[0] = this._nodes[this.size() - 1]),
        this._nodes.pop(),
        this._heapifyDown(0),
        t === this._leaf && (this._leaf = this.root()),
        t
      );
    }
    pop() {
      return this.extractRoot();
    }
    sort() {
      for (let t = this.size() - 1; t > 0; t -= 1)
        this._swap(0, t), this._heapifyDownUntil(t);
      return this._nodes;
    }
    fix() {
      for (let t = Math.floor(this.size() / 2) - 1; t >= 0; t -= 1)
        this._heapifyDown(t);
      for (let t = Math.floor(this.size() / 2); t < this.size(); t += 1) {
        const e = this._nodes[t];
        (null === this._leaf || this._compare(e, this._leaf) > 0) &&
          (this._leaf = e);
      }
      return this;
    }
    isValid() {
      const t = (e) => {
        let i = !0,
          r = !0;
        if (this._hasLeftChild(e)) {
          const r = 2 * e + 1;
          if (this._compareAt(e, r) > 0) return !1;
          i = t(r);
        }
        if (this._hasRightChild(e)) {
          const i = 2 * e + 2;
          if (this._compareAt(e, i) > 0) return !1;
          r = t(i);
        }
        return i && r;
      };
      return t(0);
    }
    clone() {
      return new i(this._compare, this._nodes.slice(), this._leaf);
    }
    root() {
      return this.isEmpty() ? null : this._nodes[0];
    }
    top() {
      return this.root();
    }
    leaf() {
      return this._leaf;
    }
    size() {
      return this._nodes.length;
    }
    isEmpty() {
      return 0 === this.size();
    }
    clear() {
      (this._nodes = []), (this._leaf = null);
    }
    [Symbol.iterator]() {
      let t = this.size();
      return {
        next: () => ((t -= 1), { value: this.pop(), done: -1 === t }),
      };
    }
    static heapify(t, e) {
      if (!Array.isArray(t))
        throw new Error("Heap.heapify expects an array of values");
      if ("function" != typeof e)
        throw new Error("Heap.heapify expects a compare function");
      return new i(e, t).fix();
    }
    static isHeapified(t, e) {
      return new i(e, t).isValid();
    }
  }
  e.Heap = i;
  var r = {};
  const { Heap: s } = e,
    h = (t) => (e, i) =>
      ("function" == typeof t ? t(e) : e) <
        ("function" == typeof t ? t(i) : i)
        ? -1
        : 1;
  class a {
    constructor(t, e) {
      (this._getCompareValue = t), (this._heap = e || new s(h(t)));
    }
    insert(t) {
      return this._heap.insert(t);
    }
    push(t) {
      return this.insert(t);
    }
    extractRoot() {
      return this._heap.extractRoot();
    }
    pop() {
      return this.extractRoot();
    }
    sort() {
      return this._heap.sort();
    }
    fix() {
      return this._heap.fix();
    }
    isValid() {
      return this._heap.isValid();
    }
    root() {
      return this._heap.root();
    }
    top() {
      return this.root();
    }
    leaf() {
      return this._heap.leaf();
    }
    size() {
      return this._heap.size();
    }
    isEmpty() {
      return this._heap.isEmpty();
    }
    clear() {
      this._heap.clear();
    }
    clone() {
      return new a(this._getCompareValue, this._heap.clone());
    }
    [Symbol.iterator]() {
      let t = this.size();
      return {
        next: () => ((t -= 1), { value: this.pop(), done: -1 === t }),
      };
    }
    static heapify(t, e) {
      if (!Array.isArray(t))
        throw new Error("MinHeap.heapify expects an array");
      const i = new s(h(e), t);
      return new a(e, i).fix();
    }
    static isHeapified(t, e) {
      const i = new s(h(e), t);
      return new a(e, i).isValid();
    }
  }
  r.MinHeap = a;
  var n = {};
  const { Heap: o } = e,
    p = (t) => (e, i) =>
      ("function" == typeof t ? t(e) : e) <
        ("function" == typeof t ? t(i) : i)
        ? 1
        : -1;
  class l {
    constructor(t, e) {
      (this._getCompareValue = t), (this._heap = e || new o(p(t)));
    }
    insert(t) {
      return this._heap.insert(t);
    }
    push(t) {
      return this.insert(t);
    }
    extractRoot() {
      return this._heap.extractRoot();
    }
    pop() {
      return this.extractRoot();
    }
    sort() {
      return this._heap.sort();
    }
    fix() {
      return this._heap.fix();
    }
    isValid() {
      return this._heap.isValid();
    }
    root() {
      return this._heap.root();
    }
    top() {
      return this.root();
    }
    leaf() {
      return this._heap.leaf();
    }
    size() {
      return this._heap.size();
    }
    isEmpty() {
      return this._heap.isEmpty();
    }
    clear() {
      this._heap.clear();
    }
    clone() {
      return new l(this._getCompareValue, this._heap.clone());
    }
    [Symbol.iterator]() {
      let t = this.size();
      return {
        next: () => ((t -= 1), { value: this.pop(), done: -1 === t }),
      };
    }
    static heapify(t, e) {
      if (!Array.isArray(t))
        throw new Error("MaxHeap.heapify expects an array");
      const i = new o(p(e), t);
      return new l(e, i).fix();
    }
    static isHeapified(t, e) {
      const i = new o(p(e), t);
      return new l(e, i).isValid();
    }
  }
  n.MaxHeap = l;
  const { Heap: _ } = e,
    { MinHeap: u } = r,
    { MaxHeap: f } = n;
  var c = (t.Heap = _),
    d = (t.MinHeap = u),
    y = (t.MaxHeap = f);
  return c;
})();

const AvlTree = (() => {
  var t = {},
    e = {};
  class r {
    constructor(t) {
      (this._value = t),
        (this._left = null),
        (this._right = null),
        (this._parent = null);
    }
    setValue(t) {
      return (this._value = t), this;
    }
    getValue() {
      return this._value;
    }
    setLeft(t) {
      if (t && !(t instanceof r))
        throw new Error("setLeft expects a BinarySearchTreeNode");
      return (this._left = t || null), this;
    }
    getLeft() {
      return this._left;
    }
    hasLeft() {
      return this._left instanceof r;
    }
    setRight(t) {
      if (t && !(t instanceof r))
        throw new Error(
          "setRight expects a BinarySearchTreeNode or null"
        );
      return (this._right = t || null), this;
    }
    getRight() {
      return this._right;
    }
    hasRight() {
      return this._right instanceof r;
    }
    setParent(t) {
      if (t && !(t instanceof r))
        throw new Error(
          "setParent expects a BinarySearchTreeNode or null"
        );
      return (this._parent = t || null), this;
    }
    getParent() {
      return this._parent;
    }
    hasParent() {
      return this._parent instanceof r;
    }
    isRoot() {
      return null === this._parent;
    }
    isLeaf() {
      return !this.hasLeft() && !this.hasRight();
    }
  }
  e.BinarySearchTreeNode = r;
  const { BinarySearchTreeNode: i } = e,
    s = (t, e) => (t === e ? 0 : t > e ? 1 : -1);
  t.BinarySearchTree = class {
    constructor(t, e) {
      if (t && "function" != typeof t)
        throw new Error(
          "BinarySearchTree constructor expects a compare function"
        );
      (this._compare = t || s),
        (this._options = e || {}),
        (this._root = null),
        (this._count = 0);
    }
    insert(t) {
      const e = new i(t),
        r = (i) => {
          const s = this._compare(e.getValue(), i.getValue());
          s < 0
            ? i.hasLeft()
              ? r(i.getLeft())
              : (i.setLeft(e.setParent(i)), (this._count += 1))
            : s > 0
              ? i.hasRight()
                ? r(i.getRight())
                : (i.setRight(e.setParent(i)), (this._count += 1))
              : i.setValue(t);
        };
      return (
        null === this._root
          ? ((this._root = e), (this._count += 1))
          : r(this._root),
        this
      );
    }
    has(t) {
      const e = (r) => {
        if (null === r) return !1;
        const i = this._compare(t, r.getValue());
        return 0 === i || e(i < 0 ? r.getLeft() : r.getRight());
      };
      return e(this._root);
    }
    hasKey(t) {
      if (void 0 === this._options.key || null === this._options.key)
        throw new Error("Missing key prop name in constructor options");
      return this.has({ [this._options.key]: t });
    }
    find(t) {
      const e = (r) => {
        if (null === r) return null;
        const i = this._compare(t, r.getValue());
        return 0 === i ? r : e(i < 0 ? r.getLeft() : r.getRight());
      };
      return e(this._root);
    }
    findKey(t) {
      if (void 0 === this._options.key || null === this._options.key)
        throw new Error("Missing key prop name in constructor options");
      return this.find({ [this._options.key]: t });
    }
    max(t = this._root) {
      return null === t
        ? null
        : t.hasRight()
          ? this.max(t.getRight())
          : t;
    }
    min(t = this._root) {
      return null === t ? null : t.hasLeft() ? this.min(t.getLeft()) : t;
    }
    lowerBound(t, e = !0) {
      let r = null;
      const i = (s) => {
        if (null === s) return r;
        const n = this._compare(t, s.getValue());
        return n > 0 || (e && 0 === n)
          ? ((null === r ||
            this._compare(r.getValue(), s.getValue()) <= 0) &&
            (r = s),
            i(s.getRight()))
          : i(s.getLeft());
      };
      return i(this._root);
    }
    floor(t, e = !0) {
      return this.lowerBound(t, e);
    }
    upperBound(t, e = !0) {
      let r = null;
      const i = (s) => {
        if (null === s) return r;
        const n = this._compare(t, s.getValue());
        return n < 0 || (e && 0 === n)
          ? ((null === r ||
            this._compare(r.getValue(), s.getValue()) >= 0) &&
            (r = s),
            i(s.getLeft()))
          : i(s.getRight());
      };
      return i(this._root);
    }
    ceil(t, e = !0) {
      return this.upperBound(t, e);
    }
    root() {
      return this._root;
    }
    count() {
      return this._count;
    }
    remove(t) {
      const e = (t, r) => {
        if (null === r) return !1;
        const i = this._compare(t, r.getValue());
        if (i < 0) return e(t, r.getLeft());
        if (i > 0) return e(t, r.getRight());
        if (r.isLeaf())
          return (
            r.isRoot()
              ? (this._root = null)
              : this._compare(t, r.getParent().getValue()) < 0
                ? r.getParent().setLeft(null)
                : r.getParent().setRight(null),
            (this._count -= 1),
            !0
          );
        if (!r.hasRight())
          return (
            r.isRoot()
              ? (this._root = r.getLeft())
              : this._compare(t, r.getParent().getValue()) < 0
                ? r.getParent().setLeft(r.getLeft())
                : r.getParent().setRight(r.getLeft()),
            r.getLeft().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        if (!r.hasLeft())
          return (
            r.isRoot()
              ? (this._root = r.getRight())
              : this._compare(t, r.getParent().getValue()) < 0
                ? r.getParent().setLeft(r.getRight())
                : r.getParent().setRight(r.getRight()),
            r.getRight().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        const s = this.min(r.getRight());
        return r.setValue(s.getValue()), e(s.getValue(), s);
      };
      return e(t, this._root);
    }
    traverseInOrder(t, e) {
      if ("function" != typeof t)
        throw new Error(".traverseInOrder expects a callback function");
      const r = (i) => {
        null === i ||
          (e && e()) ||
          (r(i.getLeft()), (e && e()) || (t(i), r(i.getRight())));
      };
      r(this._root);
    }
    traversePreOrder(t, e) {
      if ("function" != typeof t)
        throw new Error(
          ".traversePreOrder expects a callback function"
        );
      const r = (i) => {
        null === i ||
          (e && e()) ||
          (t(i), r(i.getLeft()), r(i.getRight()));
      };
      r(this._root);
    }
    traversePostOrder(t, e) {
      if ("function" != typeof t)
        throw new Error(
          ".traversePostOrder expects a callback function"
        );
      const r = (i) => {
        null === i ||
          (e && e()) ||
          (r(i.getLeft()), r(i.getRight()), (e && e()) || t(i));
      };
      r(this._root);
    }
    clear() {
      (this._root = null), (this._count = 0);
    }
  };
  var n = {},
    h = {};
  const a = (t, e) => (t === e ? 0 : t > e ? 1 : -1);
  class o {
    constructor(t, e) {
      if (e && "function" != typeof e)
        throw new Error(
          "AvlTreeNode constructor expects a compare function"
        );
      (this._value = t),
        (this._compare = e || a),
        (this._left = null),
        (this._right = null),
        (this._parent = null),
        (this._height = 1);
    }
    setValue(t) {
      return (this._value = t), this;
    }
    getValue() {
      return this._value;
    }
    setLeft(t) {
      if (t && !(t instanceof o))
        throw new Error("setLeft expects an AvlTreeNode");
      return (this._left = t || null), this;
    }
    getLeft() {
      return this._left;
    }
    hasLeft() {
      return this._left instanceof o;
    }
    setRight(t) {
      if (t && !(t instanceof o))
        throw new Error("setRight expects a AvlTreeNode or null");
      return (this._right = t || null), this;
    }
    getRight() {
      return this._right;
    }
    hasRight() {
      return this._right instanceof o;
    }
    setParent(t) {
      if (t && !(t instanceof o))
        throw new Error("setParent expects an AvlTreeNode");
      return (this._parent = t || null), this;
    }
    getParent() {
      return this._parent;
    }
    hasParent() {
      return this._parent instanceof o;
    }
    isRoot() {
      return null === this._parent;
    }
    isLeaf() {
      return !this.hasLeft() && !this.hasRight();
    }
    rotateLeft() {
      const t = this._right;
      return (
        null !== t &&
        (t.hasLeft() && t.getLeft().setParent(this),
          (this._right = t.getLeft()),
          t.setLeft(this),
          t.setParent(this._parent)),
        this.hasParent() &&
        null !== t &&
        (this._compare(this._parent.getValue(), t.getValue()) < 0
          ? this._parent.setRight(t)
          : this._parent.setLeft(t)),
        (this._parent = t),
        this.updateHeight(),
        this.hasParent() && this._parent.updateHeight(),
        this
      );
    }
    rotateRight() {
      const t = this._left;
      return (
        null !== t &&
        (t.hasRight() && t.getRight().setParent(this),
          (this._left = t.getRight()),
          t.setRight(this),
          t.setParent(this._parent)),
        this.hasParent() &&
        null !== t &&
        (this._compare(this._parent.getValue(), t.getValue()) > 0
          ? this._parent.setLeft(t)
          : this._parent.setRight(t)),
        (this._parent = t),
        this.updateHeight(),
        this.hasParent() && this._parent.updateHeight(),
        this
      );
    }
    rotateLeftRight() {
      return (
        this.hasLeft() && this._left.rotateLeft(),
        this.rotateRight(),
        this
      );
    }
    rotateRightLeft() {
      return (
        this.hasRight() && this._right.rotateRight(),
        this.rotateLeft(),
        this
      );
    }
    getLeftHeight() {
      return this.hasLeft() ? this.getLeft().getHeight() : 0;
    }
    getRightHeight() {
      return this.hasRight() ? this.getRight().getHeight() : 0;
    }
    updateHeight() {
      return (
        (this._height =
          Math.max(this.getLeftHeight(), this.getRightHeight()) + 1),
        this
      );
    }
    getHeight() {
      return this._height;
    }
    getBalance() {
      return this.getLeftHeight() - this.getRightHeight();
    }
    isBalanced() {
      const t = this.getBalance();
      return t >= -1 && t <= 1;
    }
  }
  h.AvlTreeNode = o;
  const { BinarySearchTree: g } = t,
    { AvlTreeNode: u } = h;
  n.AvlTree = class extends g {
    constructor(t, e) {
      if (t && "function" != typeof t)
        throw new Error(
          "AvlTree constructor expects a compare function"
        );
      super(t, e);
    }
    _balanceNode(t) {
      if (!t) return;
      t.updateHeight();
      const e = t.getBalance();
      e > 1
        ? t.getLeft().hasLeft()
          ? t.rotateRight()
          : t.getLeft().hasRight() && t.rotateLeftRight()
        : e < -1 &&
        (t.getRight().hasRight()
          ? t.rotateLeft()
          : t.getRight().hasLeft() && t.rotateRightLeft()),
        (e < -1 || e > 1) &&
        t === this._root &&
        (this._root = t.getParent());
    }
    insert(t) {
      const e = new u(t, this._compare),
        r = (i) => {
          const s = this._compare(t, i.getValue());
          s < 0
            ? i.hasLeft()
              ? (r(i.getLeft()), this._balanceNode(i))
              : (e.setParent(i),
                i.setLeft(e).updateHeight(),
                (this._count += 1))
            : s > 0
              ? i.hasRight()
                ? (r(i.getRight()), this._balanceNode(i))
                : (e.setParent(i),
                  i.setRight(e).updateHeight(),
                  (this._count += 1))
              : i.setValue(t);
        };
      return (
        null === this._root
          ? ((this._root = e), (this._count += 1))
          : r(this._root),
        this
      );
    }
    remove(t) {
      const e = (t, r) => {
        if (null === r) return !1;
        const i = this._compare(t, r.getValue());
        if (i < 0) {
          const i = e(t, r.getLeft());
          return this._balanceNode(r), i;
        }
        if (i > 0) {
          const i = e(t, r.getRight());
          return this._balanceNode(r), i;
        }
        if (r.isLeaf())
          return (
            r.isRoot()
              ? (this._root = null)
              : this._compare(t, r.getParent().getValue()) < 0
                ? r.getParent().setLeft(null).updateHeight()
                : r.getParent().setRight(null).updateHeight(),
            (this._count -= 1),
            !0
          );
        if (!r.hasRight())
          return (
            r.isRoot()
              ? (this._root = r.getLeft())
              : this._compare(t, r.getParent().getValue()) < 0
                ? r.getParent().setLeft(r.getLeft()).updateHeight()
                : r
                  .getParent()
                  .setRight(r.getLeft())
                  .updateHeight(),
            r.getLeft().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        if (!r.hasLeft())
          return (
            r.isRoot()
              ? (this._root = r.getRight())
              : this._compare(t, r.getParent().getValue()) < 0
                ? r.getParent().setLeft(r.getRight()).updateHeight()
                : r
                  .getParent()
                  .setRight(r.getRight())
                  .updateHeight(),
            r.getRight().setParent(r.getParent()),
            (this._count -= 1),
            !0
          );
        const s = this.min(r.getRight()),
          n = e(s.getValue(), s);
        return r.setValue(s.getValue()), this._balanceNode(r), n;
      };
      return e(t, this._root);
    }
  };
  const { BinarySearchTree: l } = t,
    { BinarySearchTreeNode: c } = e,
    { AvlTree: f } = n,
    { AvlTreeNode: _ } = h;
  var p = {
    BinarySearchTree: l,
    BinarySearchTreeNode: c,
    AvlTree: f,
    AvlTreeNode: _,
  },
    R = p.AvlTree,
    L = p.AvlTreeNode,
    d = p.BinarySearchTree,
    P = p.BinarySearchTreeNode;
  return R;
})();

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
