#!/usr/bin/env node

const usernames = ["raahim", "noor", "yawar", "admin", "ayesha"];

usernames.length = 0;

if (!usernames.length) {
  console.log("No users found!");
} else {
  for (user of usernames) {
    if (user === "admin") {
      console.log("Welcome back! No new updates.");
      continue;
    }

    console.log(`Hello there ${user}!`);
  }
}
