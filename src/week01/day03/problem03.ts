//First duplicate find

const nums = [5, 2, 8, 2, 10, 5];

let seen: number[] = [];
let firstDuplicate;
for (let i = 0; i < nums.length; i++) {
  if (seen.includes(nums[i]!)) {
    firstDuplicate = nums[i];
    console.log("first duplicate is :", firstDuplicate);
    break;
  } else seen.push(nums[i]!);
}
