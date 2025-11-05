const myArr = [1, 2, 5, 10, 20, 57, 87, 90, 200]

function binary_search_recursiveV2(arr, left_index, right_index, num){
    if(right_index < left_index) return -1;
    
    const mid_index = Math.floor((left_index + right_index) / 2);
    const mid_num = arr[mid_index];
    
    if(mid_num === num) return mid_index;

    if(mid_num < num) {
        left_index = mid_index + 1;
    } else {
        right_index = mid_index - 1;
    }

    return binary_search_recursiveV2(arr, left_index, right_index, num);
}

console.log(binary_search_recursiveV2(myArr, 0, myArr.length - 1, 87));