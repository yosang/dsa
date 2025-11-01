const tempsFahrenheit = [
  { "Jan 1": 27 },
  { "Jan 2": 31 },
  { "Jan 3": 23 },
  { "Jan 4": 34 },
  { "Jan 5": 37 },
  { "Jan 6": 38 },
  { "Jan 7": 29 },
  { "Jan 8": 30 },
  { "Jan 9": 35 },
  { "Jan 10": 30 },
];

// What was the average temperature in first week of Jan
function averageTemp(arr) {
  let result = 0;

  for(let item of arr) { // Iterate through the array
    for(let month in item) { // Iterate through the object
        result += item[month]
    }
  }

  return result / arr.length;
}

console.log(averageTemp(tempsFahrenheit));

// What was the maximum temperature in first 10 days of Jan
function maxTemp(arr) {
    const result = [];
    
    for(let item of arr) {
        for(let month in item) {
            result.push(item[month])
        }
    }

    return Math.max(...result)
}

console.log(maxTemp(tempsFahrenheit))