#!/usr/bin/env node

const test = (color) => {
  if (color === "green") {
    console.log("You have earned 5 points");
  } else {
    console.log("You have earned 10 points");
  }
};

let alien_color = "green";

test(alien_color);

alien_color = "red";

test(alien_color);
