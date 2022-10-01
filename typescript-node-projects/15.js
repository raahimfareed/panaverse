#!/usr/bin/env node

const guests = [
  "Mark Zingerburger",
  "Elon Musk",
  "KSI",
  "Neil deGrasse Tyson",
  "Jack Dorsey",
  "Vitaly Dmitriyevich Buterin",
];

for (const guest of guests) {
  console.log(`I'm inviting you, ${guest}, to my house for dinner tonight.`);
}

console.log(
  `\nUnfortunately ${guests[2]} cannot attend the dinner due to their previous commitments, therefore I will be inviting Marie Curie instead!\n`
);

guests[2] = "Marie Curie";

for (const guest of guests) {
  console.log(`I'm inviting you, ${guest}, to my house for dinner tonight.`);
}
