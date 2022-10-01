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

console.log(
  "\nI've found a bigger dinner table hence space for more guests.\n"
);

guests.push("Muhammad Ali");
guests.splice(guests.length / 2, 0, "Mahatamma Gandhi");
guests.unshift("Mike Tyson");

for (const guest of guests) {
  console.log(`I'm inviting you, ${guest}, to my house for dinner tonight.`);
}

console.log(
  "\nUnfortunately my new dinner table won't arrive before the dinner so - while I deeply regret it - I will have to remove some people\n"
);

while (guests.length !== 2) {
  console.log(
    `Unfortuntely you won't be able to attend the dinner, ${guests.pop()}`
  );
}

for (guest of guests) {
  console.log(`You are still invited ${guest}`);
}

guests.length = 0;

console.log(guests);
