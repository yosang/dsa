# About
Hash tables are nothing but a data structure that solves a problem we have with arrays when trying to store key value pairs.

Lets go ahead and pretend we are going to use an array.
We store data this way and to retrieve it we have to use a for loop, indexing each one of the elements to find what we are looking for.

```js
const arr = [
  ["march 6", 130],
  ["april 8", 9],
  ["may 12", 150],
  ["june 10", 123],
  ["juli 08", 500],
  ["august 20", 200],
];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "march 6") console.log(arr[i][1]);
}
```

The complexity of this is `O(n)`, imagine we got 10000 records, this is a costly process.

# Objects
In JavaScript, we got objects, which is a Hash Map, the complexity is `O(1)`, meaning its a constant performance cost, regardless of the size of the object.

```js
const obj = {
  "march 6": 130,
  "april 8": 9,
  "may 12": 150,
  "june 10": 123,
  "juli 08": 500,
  "august 20": 200,
};

console.log(obj['march 6'])
```
# Hash Tables
The way the JavaScript object above works, or Hash maps itself is simple.

Internally, as hash map has an array.

When we add an element to that array, they key is first processed by a hash function that creates an index for that specific value 

For example, our key is `march 6` and our value is `130` 

`march 6` > `hash function = index 9` > [null, null, null, null, null, null, null, null, `310`, null, null] 

Here our has function allocated the value `130` for `march 6`.

All the hash function is doing is converting that `key`, into an index, where we can allocate and find our value in the array.

# Hash Function
Again, the purpose of the hash function is to create an index, that serves as an identifier for that key but also as the location on the array for where to store and retrieve the value.

There are many ways of implementing has functions, this is one of them.

We take whatever the key is, lets say for this a string as `march 6`, and find the [`ASCII` ](https://www.lookuptables.com/text/ascii-table)code for each of the characters (space is included) then sum those codes up and `MOD` it up against the size of the array.


This will return an index.

```js
const myArr = [...Array(10).fill(null)] // An array with 10 slots, filled with null

function hash_function(key) {
    let hash = 0;

   for(let i = 0; i < key.length; i++) { // Find the ASCII code for each of the characters
    hash += key.charCodeAt(i);
  }
  return hash % myArr.length; // MOD it against the arr length to return the index
};


console.log(hash_function('march 6')); // 9
```

For `march 6`, the sum of every characters ASCII code is 609, moded with the array above which has a size of 10, the index will be 9.

# Collissions
The example above does not take into consideration collisions.

Collisions happen when our hash function return the same hash for different strings. This means one will just overwrite the other. For example `march 6`  and `march 17` both have the hash `9`. 

To implement collision handling we are using linked lists.

This means we are going change our array slots to mini arrays, and in those we are storing key value pairs. So for strings with the exact same hash, both will be stored in the same index, but this time we will store the key and value pairs to retrieve, and update them.

**Adding items**
Hash the key to get the index

- if the key exists, update the value
- else push new object into the index array

```js
  add(key, value) {
    const index = this.getHash(key);

    // if it already exists, update it
    for(let pair of this.arr[index]) { // this.arr[index] represents the mini array where our key value pairs are stored
      if(pair.key === key) {
        pair.value = value;
        return
      }
    }
    
    // Otherwise add it
    this.arr[index].push({ key, value });
  }
```

**Getting items**
Hash the key to get the index, go to index then loop it

- If found key, return value.
- the index is just used to select the mini array and the key is used to find the right pair and return the value

```js
  get(key) {
    const index = this.getHash(key);

    for(let pair of this.arr[index]) { // loop through the mini array and see if we find the key, if we do, return the value
      if(pair.key === key) {
        return pair.value;
      }
    }

    return this.arr[index];
  }
```