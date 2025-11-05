# About
Recusion = a function solves a problem by calling itself with a smaller version of the same problem.

We have to define a base case, as to where the recursion should stop and `rewind`.

## Base case
The base case returns a value without making another recursive call.

- Once the base case is hit, the recursion unwinds.
## Recursive case
Calls the function again with a reduced input then combines the result.

- The recursion moves towards the base case.

## Call stack
Everytime a function is called, the JavaScript engine creates a new space in memory that holds:

- the functions parameters
- its local variables
- the return adress (where to go after the function closes)

Each function call will be sent to the call stack.

When a function returns, it unwinds back to the caller.

### Example of the call stack for findSum
```js
function findSum(n) {
    if (n === 1) return 1;          // ← base case
    return n + findSum(n - 1);      // ← recursive case
}
console.log(findSum(5));
```

### 1. Call Stack (push phase)

| # | Call | Stack (top = newest) |
|---|------|----------------------|
| 1 | `findSum(5)` | `findSum(5)` |
| 2 | → `findSum(4)` | `findSum(5)` <br> `findSum(4)` |
| 3 | → `findSum(3)` | `findSum(5)` <br> `findSum(4)` <br> `findSum(3)` |
| 4 | → `findSum(2)` | `findSum(5)` <br> `findSum(4)` <br> `findSum(3)` <br> `findSum(2)` |
| 5 | → `findSum(1)` | `findSum(5)` <br> `findSum(4)` <br> `findSum(3)` <br> `findSum(2)` <br> `findSum(1)` |

At this moment the **stack is at its deepest** (5 frames).  
`findSum(1)` hits the **base case** → returns `1`.

---

### 2. Call Stack (unwind phase)

| # | Return | Value |
|---|--------|-------|
| 5 | `findSum(1)` returns `1` | `1` |
| 4 | `findSum(2)` computes `2 + 1` → `3` | `3` |
| 3 | `findSum(3)` computes `3 + 3` → `6` | `6` |
| 2 | `findSum(4)` computes `4 + 6` → `10` | `10` |
| 1 | `findSum(5)` computes `5 + 10` → `15` | `15` |

The **unwinding** is the reverse of the push order.  
Each function receives the value returned by the deeper call and finishes its own computation.

## Under the hood
```text
findSum(5) → call
   └─ findSum(4) → call
       └─ findSum(3) → call
           └─ findSum(2) → call
               └─ findSum(1) → base case → returns 1
               └─ unwind → findSum(2) = 2 + 1 = 3
           └─ unwind → findSum(3) = 3 + 3 = 6
       └─ unwind → findSum(4) = 4 + 6 = 10
   └─ unwind → findSum(5) = 5 + 10 = 15
```