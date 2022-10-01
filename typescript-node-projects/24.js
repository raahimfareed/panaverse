#!/usr/bin/env node

const name = "Raahim";
const age = 20;
const male = true;
const hobbies = ["Basketball", "Programming", "Writing"];

console.log(name === "Raahim");
console.log(name !== "Raahim");
console.log(name.toLowerCase() === "raahim");
console.log(name.toLowerCase() !== "raahim");
console.log(name.toLowerCase() !== "raahim");
console.log(age === 20);
console.log(age !== 20);
console.log(age > 20);
console.log(age < 20);
console.log(age >= 20);
console.log(age <= 20);
console.log(male && age > 18);
console.log(!male && age > 18);
console.log(male || age > 21);
console.log(!male || age < 18);
console.log(hobbies.includes("Programming") === true);
console.log(hobbies.includes("Running") === true);
console.log(hobbies.includes("Sleeping") === false);
console.log(hobbies.includes("Basketball") === false);
