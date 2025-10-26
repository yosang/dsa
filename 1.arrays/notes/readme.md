# About
An array is a linear data structure that stores elements in memory locations sequenced by each after each other. In JavaScript arrays are dynamic, meaning the can grow and shrink and hold different data types.

They are 0 indexed and in JavaScript we can use their built-in methods.

- `Access/Modify`: push, pop, shift, unshift, splice (three is a O(n) cost for shifting elements).
- `Iteration`: map, filter, reduce, forEach.
- `Search`: includes, indexOf, find, findIndex.
- `Others`: slice, concat, join.

# O(n) cost
What we mean with shifting is that an array has their specific memory locations set for each of the elements. When we remove an item from start of the array, say with `.shift`, now the indexes change for each element.

`.shift`  removes the first element and returns it. All other elements are moved one index to the left. (arr[1] becomes arr[0]).

This is costly because the entire array, since its (`n`) has to be re-indexed by shifting each element one index to the left.

```js
const myArr = [1, 6, 10, 16, 27, 56, 68, 91];
const removed = myArr.shift(); // removed = 1
console.log(myArr); // [6, 10, 16, 27, 56, 68, 91]
```

- **Cost**: O(n) because all n elements (7 here) are shifted. For a 1,000,000-element array, thats 1,000,000 shifts.

The same thing goes for unshift, which adds one element to the start of the array.

# O(1)
Operaitons like `push` or `pop` are constant in cost, because we are just adding an element to the end of the array.