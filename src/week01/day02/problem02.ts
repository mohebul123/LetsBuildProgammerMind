const nums = [1, 5, -2, 8, -10, 0, 7, -3, 0, 0];

let pos = 0;
let neg = 0;
let zero = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i]! < 0) neg++;
  else if (nums[i]! > 0) pos++;
  else zero++;
}

console.log("Positive:", pos, "Negative:", neg, "Zeros:", zero);
