#!/usr/bin/env node

// Passes the test
let alien_color = "green";

if (alien_color === "green") {
  console.log("You have earned 5 points");
}

// Fails the test
alien_color = "Red";
if (alien_color === "green") {
  //
}
