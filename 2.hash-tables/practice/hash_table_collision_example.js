class HT {
  constructor() {
    this.size = 10; // Our array will be size of 10;
    this.arr = [...Array(this.size).fill([])]; // Creating empty arrays for storing key value pairs
  }

  getHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.arr.length;
  };

  add(key, value) {
    const index = this.getHash(key);
    this.arr[index] = value;
  };

  get(key) {
    const index = this.getHash(key);
    return this.arr[index];
  }

  remove(key) {
    const index = this.getHash(key);
    if(this.arr[index]) this.arr[index] = null;
  }
}

const newObj = new HT();

console.log(newObj.getHash("march 6")); // Output 9
console.log(newObj.getHash("march 17")); // Output 9

newObj.add('march 6', 130)
newObj.add('march 17', 459) // this one replaces the old one because of the same index

console.log(newObj.get('march 6')) // Output 459 because march 17 replaces march 6

console.log(newObj.arr) // Logs the new array
