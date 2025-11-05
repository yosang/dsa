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
    const mid_index = Math.floor((left_index + right_index) / 2);
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

function binary_search_recursive(arr, left_index, right_index, num) {
  if (left_index <= right_index) {
    const mid_index = Math.floor((left_index + right_index) / 2);

    if (arr[mid_index] === num) return mid_index;

    if (arr[mid_index] < num) {
      left_index = mid_index + 1;
    } else {
      right_index = mid_index - 1;
    }

    return binary_search_recursive(arr, left_index, right_index, num);
  }

  // Return -1 if num is not found
  return -1;
}

// console.log(binary_search(myArr, 45));
// console.log(binary_search_recursive(myArr, 0, myArr.length - 1, 45));

const numbers = [1, 4, 6, 9, 11, 15, 15, 15, 17, 21, 34, 34, 56];

function findAllOccurrences(arr, number) {
  const index = binary_search(arr, number); // We use binary search to retrieve the first index of number
  const result = [index]; // Once found, populate an array with it

  // Search left side of the array using the found index
  const left_arr_index = index - 1;

  for (let i = 0; i <= left_arr_index; i++) { // We are going to use i as 0 and up to index - 1
    if (arr[i] === number) result.push(i);
  }

  // Search right side of the array using the found index
  const right_arr_index = index + 1;

  for (let i = right_arr_index; i < arr.length; i++) { // We are going to use index + 1 as start for i and to the end of the array
    if (arr[i] === number) result.push(i);
  }

  return result.sort();
}

console.log(findAllOccurrences(numbers, 15))
