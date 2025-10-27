class HT {
  constructor() {
    this.size = 15; // Our array will be size of 15;
    this.arr = [...Array(this.size).fill(null)];
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
newObj.add('march 6', 130) // Added at index 9
console.log(newObj.arr) // Confirms the above

console.log(newObj.get('march 6')) // Output 130

newObj.remove('march 6') // removes the value, replacing it with null
console.log(newObj.arr) // Logs the new array