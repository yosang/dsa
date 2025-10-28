class HT {
  constructor() {
    this.size = 10; // Our array will be size of 10;
    this.arr = [...Array(this.size)].map(() => []); // Creating empty arrays for storing key value pairs
  }

  getHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.arr.length;
  }

  add(key, value) {
    const index = this.getHash(key);

    // if it already exists, update it
    for(let pair of this.arr[index]) {
      if(pair.key === key) {
        pair.value = value;
        return
      }
    }
    
    // Otherwise add it
    this.arr[index].push({ key, value });
  }

  get(key) {
    const index = this.getHash(key);

    for(let pair of this.arr[index]) {
      if(pair.key === key) {
        return pair.value;
      }
    }

    return this.arr[index];
  }

  remove(key) {
    const index = this.getHash(key);
    
    for(let i = 0; i < this.arr[index].length; i++) {
      if(this.arr[index][i].key === key) {
        this.arr[index].splice(i, 1);
        return true;
      }
    }

    return false;
  }
}

const newObj = new HT();

console.log(newObj.getHash("march 6")); // Output 9
console.log(newObj.getHash("march 17")); // Output 9

newObj.add("march 6", 130);
newObj.add('march 17', 459);

console.log(newObj.get('march 6')) // Output 130
console.log(newObj.get('march 17')) // Output 459

console.log(newObj.arr); // Logs the array


// console.log(newObj.remove('march 17')) // Output 459
// console.log(newObj.arr); // Logs the array