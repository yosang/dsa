// The dataset
// 1. January -  2200
// 2. February - 2350
// 3. March - 2600
// 4. April - 2130
// 5. May - 2190

const mE = [2200, 2350, 2600, 2130, 2190, 2000];

// Lets answer the following questions using an array, we dont need to store the month names.

// 1. In Feb, how much extra did we spend compared to January?
console.log(mE[1] - mE[0]); // 150

// 2. Whats the total expense in first quarter (first three months) of the year.
console.log(mE[0] + mE[1] + mE[2]); // 7150

// 3. Did we spend exactly 2000 dollars in any month?
for (let i = 0; i < mE.length; i++) {
    if (mE[i] === 2000) console.log("We spent examtly 2000 in month", i + 1);
}

// 4. June month just finished and the expense is 1980 dollar. Lets add this expense to our list
mE.push(1980);

// 5. We returned an item that we bought in a month of April and
// got a refund of 200$. Lets make a correction to our monthly expense list based on this
mE[3] = mE[3] + 200;

console.log(mE);
