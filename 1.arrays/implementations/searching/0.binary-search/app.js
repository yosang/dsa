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

  while (left_index <= right_index) { // when left > right, break the loop and return -1, we didnt find the number
    // Calculates the middle index and retrieves the middle number
    const mid_index = Math.floor((left_index + right_index) / 2);
    mid_num = arr[mid_index];

    // Whenever we find the target, return the index
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
  if (left_index <= right_index) { // same as above, but using recursion, if left > right, we've stepped out of the search range, nothing wa sfound return -1
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
  
  if (index === -1) return []; // If no index is returned from binary search return an empty array

  const result = [index]; // Once found, populate an array with it

  // First search left side of the array for numbers that match number
    // We start i as index -1
    // Run it for as long as its great or equal to 0
    // Decrease i for each iteration
    // If found, push it
      // Else break the loop early
  for (let i = index - 1; i >= 0; i--) {
    if (arr[i] === number) {
      result.push(i);
    } else {
      break;
    }
  }

  // Now search right side of the array for numbers up until the length
  // We start i as index + 1
  // Run it up to the length of the array
  // Increase i for each iteration
  // If found, push it
    // Else break the loop early

  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] === number) {
      result.push(i);
    } else {
      break;
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(findAllOccurrences(numbers, 15));
