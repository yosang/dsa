// 3. Create a list of all odd numbers between 1 and a max number.
// Max number is something we need to take from a param using function

function oddNumbers(max) {
    const arr = [];
    for(let i = 0; i < max; i++) {
        if(i % 2 === 1) arr.push(i);
    }
    return arr;
}

console.log(oddNumbers(10))