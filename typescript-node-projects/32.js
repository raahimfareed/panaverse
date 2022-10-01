#!/usr/bin/env node

const current_users = [
  "raahim",
  "john.doe",
  "aqsa7263",
  "user81623814",
  "farooq_ik",
];
const new_users = ["PEW", "JackDorsey", "Raahim", "John.Doe"];

for (n of new_users) {
  if (current_users.some((c) => c.toLowerCase() === n.toLowerCase())) {
    console.log(`${n} is already taken!`);
  } else {
    console.log(`${n} is available!`);
  }
}
