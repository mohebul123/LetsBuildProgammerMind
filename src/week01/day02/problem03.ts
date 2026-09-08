const numbers = [5, 5, 10, 8];
let max = numbers[0];
let secondMax = -Infinity;
for (let i = 1; i < numbers.length; i++) {
  if (max! < numbers[i]!) {
    max = numbers[i];
  } else if (secondMax < numbers[i]!) {
    secondMax = numbers[i]!;
  }
}
console.log("second Higehts Is: ", secondMax);
