// SAMPLE DATA
const myArr = [2, 10, 5, 8, 67, 3, 88, 39, 7]

// PART 1 HOW IT WORKS
function bubbleSortV1(numbers) {
    const arr = [...numbers] // We are just mutating the original array and returning it back

    // This first loop will take care of bubbling up any elements that is bigger than the next one
        // All the way up to the end
        // However, pay attention to what happens in iteration 3, 10 is lower than 67 so we dont swap them and move on
            // On iteration 4, 67 is bigger than 3 so its swapped, but now 10 is no longer being bubbled up
            // Its stuck in the wrong position, so to fix this we would have to run this process all over again
            // Thats what we do in V2 to solve this issue
    for(let j = 0; j < arr.length - 1; j++) {
    
        if(arr[j] > arr[j + 1]) {
            const tmp = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp;
        }
    }
    return arr;
}

// This will sort, but not completely, due to inconsistencies in the array
    // The loop only iterates for the length of the array, once it finished, some numbers will be left unsorted
console.log(bubbleSortV1(myArr)); 

// PART 2
function bubbleSortV2(numbers) {
    const arr = [...numbers]

    // This second loop will repeat the process for as long as there are elements in the array
        // This will resolve the inconsistencies of number being left unsorted / skipped
        // After debugging, we notice that by i = iteration 4, the array is done sorting
        // However, the outer loop will keep running, spending memory, until the end of the array
            // So we need to apply a flag mechanism for that, so that if nothing is left to sort, break out of the loop
            // additionally, once the last numbers have been sorted, there no need to check those again
                // So the inner loop j must run for the length of the array - 1 - i
                // Every time i increases, that means we have bubbled up the last number to the end
                // So theres no need to go that far, thus we can exclude it
    for(let i = 0; i < arr.length; i++) {
        let flag = false
        for(let j = 0; j < arr.length - 1 - i; j++) { // The condition will be reduced by i's increment thus excluding the last element
            
            if(arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp;
                flag = true;
            }
        }
        if(!flag) break;
    }    
    return arr;
}
// console.log(bubbleSortV2(myArr)); 
console.log(bubbleSortV2([1, 2, 3, 4, 5]))
console.log(bubbleSortV2(['home', 'away', 'charlie', 'franck', 'zachariasbryggen'])) // strings work as well