const nums = [5, 2, 5, 8, 5, 10];

let fiveCounter = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 5) fiveCounter++;
}

console.log("Five occures ", fiveCounter, "times");
