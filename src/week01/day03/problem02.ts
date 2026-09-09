//count odd numbers
const nums = [5, 8, 10, 13, 12, 7, 9];

let oddCounter = 0;

for (let i = 0; i < nums.length; i++) {
  if (!(nums[i]! % 2 === 0)) oddCounter++;
}

console.log(oddCounter);
