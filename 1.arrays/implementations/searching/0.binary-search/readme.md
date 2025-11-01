# Linear search
We got an array, and we want to find a specific number `const myArr = [12, 15, 17, 19, 21, 24, 45, 67]`

Finding an index by iteration the whole array gives us a time complexity of `O(n)` which means we have to go through each item. This is called a `linear earch`.

```js
for(let i = 0; i < myArr.length; i++) {
    if(myArr[i] === 32) return i;
}
```

# Binary search
The concept of binary search works only on `sorted` arrays, so this wont work on an unsorted list.

## Setting the stage
1. The first thing to do is prepare the left and right index variables, left index will be the start of the array and right will be the end of the array, which we find with `arr.length - 1`. Additionally we are going to set middle index to 0, because we will keep updating this from inside the loop.
- `left index` = 0
- `right index` = arr.length - 1
- `middle index` = 0

## The loop
1. We are going to use a simple while loop that runs for as long as left index is less or equal to right index.
2. Now we need to set `middle index` of the array, in order to do that we take `left index + right index / 2`. This might give us a float pointing number, which wont work as an index so we can use `parseInt` on it.
3. Now we need to get the number in the middle to compare with the number we are looking for, which should now be easy to find using our mid index found in the first step: `arr[mid_index]`;
4. The next step is to reduce the array scope by comparing the middle number with the number we are looking for.
    - Think of it like this, if the middle number is in fact the number we are looking for, simply return the index
    ```js
    if(mid_num === num) {
        return mid_index
    }
    ```
    - If the middle number is less than the number we are looking for, then that means we need to keep looking.
        - Since the array is already sorted, and we know that the mid number is less than the number we are looking for, that means the number we are looking for must be on the right side, so we need to move the left index to start from the next number, right from the current mid number.
        - We also add a condition to check in case the number we are looking for is on the left side of the array, if so we reduce the array to select the left side of the array.
    - We reduce the array by checking
    ```js
    if(mid_num < num) {
        left_index = mid_num + 1;
    } else {
        right_index = mid_num - 1;
    }
    ```
5. If the number is not in the array at all after everything is finished running, we return `-1`

So for the array above, these are the steps

Find 45 in [12, 15, 17, 19, 21, 24, 45, 67]

left=0, right=7 → mid=3 → 19 < 45 → left = 4
left=4, right=7 → mid=5 → 24 < 45 → left = 6
left=6, right=7 → mid=6 → 45 === 45 → return 6