const nums = [5, 8, 10, 13, 12];
let evenCount = 0;
for (let i = 0; i < nums.length; i++) {
  console.log(i);
  if (nums[i]! % 2 === 0) {
    evenCount++;
  }
}

console.log(evenCount);
