const myArr = [...Array(10).fill(null)] // An array with 10 slots, filled with null

function hash_function(key) {
  let hash = 0;

   for(let i = 0; i < key.length; i++) { // Find the ASCII code for each of the characters
    hash += key.charCodeAt(i);
  }
  return hash % myArr.length; // MOD it against the arr length to return the index
};


console.log(hash_function('march 6')); // 9