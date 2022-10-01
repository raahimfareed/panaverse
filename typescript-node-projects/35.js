#!/usr/bin/env node

const animals = ["Bat", "Parrot", "Flying Squirrel"];

for (animal of animals) {
  console.log(animal);
}

for (animal of animals) {
  if (animal === "Bat") {
    console.log(`${animal} can fly in the dark.`);
    continue;
  }
  console.log(`${animal} is very lively.`);
}

console.log("All of the animals mentioned can fly");
