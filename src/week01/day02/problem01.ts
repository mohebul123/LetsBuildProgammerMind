const nums = [12, 5, 8, 2, 20, 7];

let min = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (min! > nums[i]!) {
    min = nums[i];
  }
}

console.log(min);
