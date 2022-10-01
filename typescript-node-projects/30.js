#!/usr/bin/env node

const usernames = ["raahim", "noor", "yawar", "admin", "ayesha"];

for (user of usernames) {
  if (user === "admin") {
    console.log("Welcome back! No new updates.");
    continue;
  }

  console.log(`Hello there ${user}!`);
}
