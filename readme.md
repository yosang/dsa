# Usage
Clone the repo with `git clone https://github.com/yosang/dsa`

Run any of the scripts with `node [file.js]` or use the debugger in an `IDE` to see the console outputs.

# Author
[@Yosmel Chiang](https://github.com/yosang)

# License
[MIT](https://opensource.org/license/mit)

# Resources
Ill be using [W3Schools](https://www.w3schools.com/dsa/dsa_intro.php) for some of the jargon, in fact some of the facts about data structures and algorithms are copied directly from this page.

# Data Structures
A data structure is just a way to store data so we can work with it efficiently. We use different data structures depending on what the data we are storing and what we want to do with it.

They are containers for storing data in a specific memory layout.

There are more Data Structures to the list below, however to keep things extra simple Im just gonna focus on these for now.

In programming we've already worked with data structures in some way or another. There are a few types to notice here

# Common types of Data Structures

## Primitive
Often represent single values such as `integers`, `floating-point numbers`, `booleans`, `characters`.

## Abstract
These are highers-level data that are built around containers for storing primitive data and provide more complex opertions. Such as `indexing`, `sorting`, `searching` etc.
### Linear Data Structures:
- `Arrays`: Store a fixed-size collection of elements of the same data type in contiguous memory locations.
- `Stacks`: Follow the Last-In, First-Out (LIFO) principle, where the last element added is the first to be removed.
- `Queues`: Follow th1e First-In, First-Out (FIFO) principle, where the first element added is the first to be removed.

### Non-Linear Data Structures
- `Hash Tables`: Use a hash function to map keys to values, allowing for efficient data retrieval.

# Algorithms
Algorithms is just a sequence of steps and instructions to solve a specific problem.

Say we are going to make a pizza, we got the recipe (`data structure`) and the cooking is the algorithm. We have to specificy how to take these ingredientes from the recipe (`data structure`), and how we are going to make the pizza at the right temperature (`algorithm`).

Other examples
- `Google maps` has an algorithm that finds the shortest route with less traffic at the current time.
- `Cars` have an algorithm that adjusts the speed and gearing automatically (cruise control).

# Data Structures and Algorithms
These two go hand in hand, Data Structures are pretty much just taking space in memory if we can interact with it using an algorithm.

Algorithms on the other hand arent woth much if we dont have a data structure to work with.

# Big O notation
It is a measure that describes how an algorithm's performance (time or space) scales as the input size grows.

To explain it without using math jargon, we can ask ourselves the following when creating an algorithm:
- How shitty will this program perform when I throw more data on it?

So to answer that question, we should care about performance when creating algorithms, and that performance is measured i Big O.

### Now lets add some jargon:
- What does Big O Measure?: runtime or memory usage with input size (n).
- Why?: Helps us predict if the codebase will choke on large dataset.s

### Examples
- **Order of 1 or O(1)** is when the runtime stays the same (constant), no matter the input size.
- It doesnt matter if the array has 10 elements or 10 000.
- Its always the same speed because it jumps right to the index provided.
    ```js
    function getElement(arr, index) {
        return arr[index] // This will always take the same time.
    }
    ```
- **Order of n or O(n)** is when runtime grows proportionally with input size (linear).
- It matters if the data is 10 or 10 000, the more data the more time this algorithm will take
- this is typical for loop when we are checking every item in the array.
    ```js
    function linearSearch(arr, target) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === target) return i // Checks every single item in the array
        }
        return null;
    }
    ```
- **Order of n² or O(n²)** is when runtime grows with the square of input size.
- Gets slow fast because we are iteration in quadratic time.
- Common in nested loops
    ```js
    function bubbleSort(arr) {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - 1 - i; j++) {
                if(arr[j] > arr[j + 1]) {
                    let tmp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr
    }
    ```
### Context
Lets asume we got an array `const myArr = [1, 6, 10, 16, 27, 56, 68, 91]`.

We want to find the index of `68` using a for loop, we could program it like using `O(n)`.

```js
for(let i = 0; myArr.length; i++) {
    if(myArr[i] === 68) return i
}
```

This will work, however its inneficient because we are iterating 8 times, going through a bunch of numbers from start to end.

This can be solved with binary search which is `O(log n)` instead, reducing the amount of iterations.

# Quick recap
- `Data Structure` 	A way of organizing data so it can be used efficiently. Common data structures include `arrays` and `hash tables`.
- `Algorithm` 	A set of step-by-step instructions to solve a specific problem.
- `Time Complexity` 	A measure of the amount of time an algorithm takes to run, depending on the amount of data the algorithm is working on.
- `Space Complexity` 	A measure of the amount of memory an algorithm uses, depending on the amount of data the algorithm is working on.
- `Recursion` 	A programming technique where a function calls itself.