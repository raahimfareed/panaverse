#!/usr/bin/env node

const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

for (number of numbers) {
  if (number % 10 == 1 && number % 100 != 11) {
    console.log(number + "st");
    continue;
  }
  if (number % 10 == 2 && number % 100 != 12) {
    console.log(number + "nd");
    continue;
  }
  if (number % 10 == 3 && number % 100 != 13) {
    console.log(number + "rd");
    continue;
  }
  console.log(number + "th");
}
