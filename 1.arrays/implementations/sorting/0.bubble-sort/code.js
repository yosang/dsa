function bubbleSort(numbers) {
    const arr = [...numbers]

    for(let i = 0; i < arr.length; i++) {
        let flag = false
        for(let j = 0; j < arr.length - 1 - i; j++) {
            
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
console.log(bubbleSort([2, 10, 5, 8, 67, 3, 88, 39, 7])); 
console.log(bubbleSort([1, 2, 3, 4, 5]))
console.log(bubbleSort(['homer', 'amalie', 'charlie', 'franck', 'zach', 'yosmel']))
