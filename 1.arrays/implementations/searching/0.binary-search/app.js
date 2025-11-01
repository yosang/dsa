const myArr = [12, 15, 17, 19, 21, 24, 45, 67];

function linear_search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return -1;
}

function binary_search(arr, num) {
  // Starts off with the whole array, from start to end
  let left_index = 0;
  let right_index = arr.length - 1;

  while (left_index <= right_index) {
    // Calculates the middle index and retrieves the middle number
    mid_index = Math.floor((left_index + right_index) / 2);
    mid_num = arr[mid_index];

    // If we find the target, return the index
    if (mid_num === num) {
      return mid_index;
    }

    // Decide which half of the array to narrow down
    if (mid_num < num) {
      // Narrows down to the right side to keep looking
      left_index = mid_index + 1;
    } else {
      // Narrows down to the left side to keep looking
      right_index = mid_index - 1;
    }
  }

  return -1;
}

console.log(binary_search(myArr, 45));
