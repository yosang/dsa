// We want to use bubble sort to sort an object by providing the key to sort by.

const elements = [
  { name: "Charlie", amount: 1000, year: 2012, device: "iphone-10" },
  { name: "Frankc", amount: 400, year: 2024, device: "google pixel" },
  { name: "Paal", amount: 200, year: 2006, device: "vivo" },
  { name: "Jannicke", amount: 800, year: 2010, device: "iphone-8" },
];

function bubbleSort(elements, key) {
  const arr = [...elements]

    for(let i = 0; i < arr.length - 1; i++) {
        let swapped = false

        for(let j = 0; j < arr.length - 1 - i; j++) {
          if(arr[j][key] > arr[j + 1][key]) {
            const tmp = arr[j]
            arr[j] = arr[j+1]
            arr[j + 1] = tmp
            swapped = true
          }
        }

        if(!swapped) break;
    }
  return arr
}

console.log(bubbleSort(elements, 'amount'))
console.log(bubbleSort(elements, 'year'))