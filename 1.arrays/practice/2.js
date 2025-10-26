const sH = ["spider man", "thor", "hulk", "iron man", "captain america"];

// We want to find out

// 1. Length of the list
console.log(sH.length);

// 2. Add 'black panther' at the end of this list
sH.push("black panther");
console.log(sH);

// 3. Realize that we need to add 'black panther' after 'hulk',
//     so remove it from the list first and then add it after 'hulk'
sH.pop();

// const firstPart = sH.slice(0, sH.indexOf("hulk") + 1);
// firstPart.push("black panther");
// const secondPart = sH.slice(sH.indexOf("hulk") + 1);
// console.log([...firstPart, ...secondPart]);

sH.splice(sH.indexOf("hulk") + 1, 0, "black panther"); // This one is just a oneliner
console.log(sH);

// 4. We don't like thor and hulk because they get angry easily and since they are next to eachother they keep fighting :)
//     We want to remove thor and hulk from list and replace them with doctor strange (because he is cool beans).
//     Do that with one line of code.
sH.splice(sH.indexOf("thor"), 2, "doctor strange");
console.log(sH);

// 5. Sort the heros list in alphabetical order.

// Bubble sort :)
for (let i = 0; i < sH.length - 1; i++) {
  for (let j = 0; j < sH.length - 1 - i; j++) {
    if (sH[j] > sH[j + 1]) {
      const tmp = sH[j];
      sH[j] = sH[j + 1];
      sH[j + 1] = tmp;
    }
  }
}

// a oneliner for sorting could be .sort();
console.log(sH);
