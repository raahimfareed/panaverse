#!/usr/bin/env node

const test = (color) => {
  if (color === "green") {
    console.log("You have earned 5 points");
  } else if (color === "yellow") {
    console.log("You have earned 10 points");
  } else {
    console.log("You have earned 15 points");
  }
};

let alien_color = "green";

test(alien_color);

alien_color = "red";

test(alien_color);

alien_color = "yellow";

test(alien_color);
